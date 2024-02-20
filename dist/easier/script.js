const toCardElement = (card, index) => {
  return el(
    "td",
    "bingo-card",
    { id: `card-${index}` },
    el("img", "card-img", {
      src: card.img,
      alt: card.name,
      width: 125,
      height: 125,
    }),
    el("h2", "w-fit text-gray-600 text-left", {}, t(card.name))
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
        "px-2 mb-px border-b-2 border-gray-200 bg-white hover:border-gray-100 hover:translate-y-px text-sm",
        { onclick: `selectRow(${row})` },
        t("➔")
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

const tap = (tapFunction) => (value) => {
  tapFunction(value);
  return value;
};

document.addEventListener("DOMContentLoaded", () => {
  cards.map(toCardRow).forEach(appendRow("#bingo-container"));
  [...document.querySelectorAll(".card-img")].forEach((el) =>
    el.addEventListener("click", imgPopup(el.src))
  );
});

const getRandomBingoIds = () =>
  routes[Math.floor(Math.random() * routes.length)];

const clearSelectedCards = () =>
  document
    .querySelectorAll(".bingo-card")
    .forEach((card) => card.classList.remove("bingo-selected-card"));

const applySelectedRoute = ({ ids, url, dist }) => {
  ids.forEach((id) => {
    document.querySelector(`#card-${id}`).classList.add("bingo-selected-card");
  });
  document.querySelector("#map-button").onclick = () =>
    window.open(url, "_blank");
  document.querySelector("#distance-txt").innerText = dist;
};

const enableMapButton = () => {
  document.querySelector("#map-button").disabled = false;
};

const selectRandomBingo = () => {
  clearSelectedCards();
  applySelectedRoute(getRandomBingoIds());
  enableMapButton();
};

const findByRoute = (targetIds) =>
  routes.find((route) => arrayEquals(route.ids, targetIds));

const selectCol = (i) => {
  clearSelectedCards();
  const targetIds = new Array(5).fill(i).map((el, index) => el + index * 5);
  applySelectedRoute(findByRoute(targetIds));
};

const selectRow = (i) => {
  clearSelectedCards();
  const targetIds = new Array(5).fill(i * 5 - 4).map((el, index) => el + index);
  applySelectedRoute(findByRoute(targetIds));
};

const selectDiag = (topLeft) => {
  clearSelectedCards();
  const targetIds = topLeft ? [1, 7, 13, 19, 25] : [5, 9, 13, 17, 21];
  applySelectedRoute(findByRoute(targetIds));
};

const selectLoop = (loop) => {
  const targetIds =
    loop === "north"
      ? [1, 2, 3, 6, 8, 11, 12, 13]
      : loop === "west"
      ? [11, 12, 13, 16, 18, 21, 22, 23]
      : loop === "south"
      ? [12, 13, 17, 18, 19, 22, 23, 24]
      : [3, 4, 5, 8, 10, 13, 14, 15];
  clearSelectedCards();
  applySelectedRoute(findByRoute(targetIds));
};

const selectHardcoreBingo = () => {
  clearSelectedCards();
  applySelectedRoute(hardcodeRoute);
  enableMapButton();
};

const imgPopup = (src) => () => {
  console.log("sou haida", src);
  const card = cards.flat().find((card) => src.endsWith(card.img));
  Swal.fire({
    imageUrl: card.full_img,
    imageAlt: `${card.name}: ${card.description}}`,
    title: card.name,
    text: card.description,
    confirmButtonText: "Close",
  });
};
