// fetch("http://localhost:8080/wpgbingo/hof")
fetch("https://gen-pup.herokuapp.com/wpgbingo/hof")
  .then(resJson)
  .then(({ hofers }) => {
    document.querySelector(".loading-text").classList.add("hide");
    hofers.forEach(showHofer);
    showHofer({
      name: "This could be you!",
      date: "",
      img: "img/1seineriveratperimeter.jpeg",
      map: "",
    });
  })
  .catch(console.error);

function formatDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  return date.format(d, "MMM D, YYYY", true);
}

function showHofer(hofer) {
  const card = el(
    "div",
    "card col-2 m-md-1 p-1",
    { key: "1" },
    el("img", "card-img-top mt-2", { src: hofer.img, alt: hofer.name }),
    el("h5", "card-title", {}, t(hofer.name)),
    el("p", "", {}, t(formatDate(hofer.date))),
    el(
      "a",
      "",
      { href: hofer.map },
      el("h6", "", {}, hofer.map ? t("Map") : el("span", "", {}))
    )
  );
  document.querySelector("#wof").appendChild(card);
}
