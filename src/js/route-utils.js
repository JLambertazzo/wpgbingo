// Utilities specific to a bingo page
// **WARNING**:
// -> MUST import some routes.js file specifying a "routes" variable
// -> MUST import routes.js BEFORE importing this file

/*
 * LOADING BINGOS AND IMAGES
 * This code block runs on page load
 */
const toCardImageWithOverlay = (card) => {
  return el(
    "div",
    "relative",
    {},
    el("img", "card-img block mx-auto", {
      src: card.img,
      alt: card.name,
      width: 125,
      height: 125,
    }),
    el(
      "div",
      "bingo-overlay",
      { src: card.img },
      el("h2", "w-fit text-gray-50 mb-0 mx-auto", {}, t(card.name))
    )
  );
};

const toCardElement = (card, index) => {
  return el(
    "td",
    "bingo-card",
    { id: `card-${index}` },
    toCardImageWithOverlay(card)
  );
};

const getSelectArrow = (row) =>
  el(
    "td",
    "pr-2",
    {},
    el(
      "h2",
      "",
      {},
      el(
        "button",
        "drop-btn",
        { onclick: `selectRow("${row}")` },
        el("i", "material-icons", {}, t("chevron_right"))
      )
    )
  );

const toCardRow = (cards, rowIndex) =>
  el(
    "tr",
    "",
    {},
    getSelectArrow(rowIndex + 1),
    ...cards.map((card, cardIndex) =>
      toCardElement(card, rowIndex * 5 + cardIndex + 1)
    )
  );

const appendRow = (selector) => (row) => {
  document.querySelector(selector).appendChild(row);
};

document.addEventListener("DOMContentLoaded", () => {
  cards.map(toCardRow).forEach(appendRow("#bingo-container"));
  [...document.querySelectorAll(".bingo-overlay")].forEach((el) =>
    el.addEventListener("click", imgPopup(el.getAttribute("src")))
  );
});
// ======= END OF LOADING CODE =======

/**
 * Deselects any currently selected bingo route
 * @returns
 */
const clearSelectedCards = () =>
  document
    .querySelectorAll(".bingo-card")
    .forEach((card) => card.classList.remove("bingo-selected-card"));

/**
 * Apply a selected route to the page
 * @param {Route} route
 */
const applySelectedRoute = ({ ids, url, dist }) => {
  ids.forEach((id) => {
    document.querySelector(`#card-${id}`).classList.add("bingo-selected-card");
  });
  document.querySelector("#map-button").onclick = () =>
    window.open(url, "_blank");
  document.querySelector("#distance-txt").innerText = dist;
};

/**
 * Enables "Map It!" button on bingo pages
 */
const enableMapButton = () => {
  document.querySelector("#map-button").disabled = false;
};

const findAndApply = (src) => (name) => {
  clearSelectedCards();
  const found = src.find((el) => el.name === name);
  applySelectedRoute(found);
  enableMapButton();
};

const selectCol = findAndApply(columns);
const selectRow = findAndApply(rows);
const selectDiag = findAndApply(diagonals);
const selectLoop = findAndApply(loops);

const selectHardcoreBingo = () => {
  clearSelectedCards();
  applySelectedRoute(hardcodeRoute);
  enableMapButton();
};

const imgPopup = (src) => () => {
  const card = cards.flat().find((card) => src.endsWith(card.img));
  Swal.fire({
    imageUrl: card.full_img,
    imageAlt: `${card.name}: ${card.description}}`,
    title: card.name,
    text: card.description,
    confirmButtonText: "Close",
  });
};
