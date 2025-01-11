function formatDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  return date.format(d, "MMM D, YYYY", true);
}

const showHofer = (selector) => (hofer) => {
  const card = el(
    "div",
    "card-width bg-gray-200 p-4 rounded-lg shadow-lg",
    { key: "1" },
    el("img", "aspect-square w-11/12 bg-gray-500 border-4 border-gray-100 rounded-lg mb-1 mx-auto", { src: hofer.img, alt: hofer.name }),
    el("h5", "text-blue-600 font-lighter text-xl w-11/12 mx-auto", {}, t(hofer.name)),
    el("p", "w-11/12 mx-auto", {}, t(formatDate(hofer.date))),
    el(
      "a",
      "w-11/12 mx-auto text-blue-400 hover:text-blue-600 underline font-light",
      { href: hofer.map },
      el("h6", "w-11/12 mx-auto", {}, hofer.map ? t("Map") : el("span", "", {}))
    )
  );
  document.querySelector(selector).appendChild(card);
}

const addToEasier = showHofer('#wall-of-fame-easier');
const addToHarder = showHofer('#wall-of-fame-harder');
const addToHistory = showHofer('#wall-of-fame-history');

easierHallOfFame.forEach(addToEasier);
harderHallOfFame.forEach(addToHarder);
historyHallOfFame.forEach(addToHistory);

const you = {
  name: "This could be you!",
  date: "",
  img: "https://via.placeholder.com/150",
  map: "",
}

addToEasier(you)
addToHarder(you)
addToHistory(you)
