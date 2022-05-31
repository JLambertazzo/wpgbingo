/**
 * 1. Visit count related code
 */
console.log("getting");
// fetch("https://gen-pup.herokuapp.com/visits/wpgbingo")
fetch("http://localhost:8080/visits/wpgbingo")
  .then(resJson)
  .then(({ visits }) => {
    const visitsToday = visits.filter((visit) => {
      const d = new Date(visit.date);
      const n = new Date();
      return (
        d.getDate() === n.getDate() &&
        d.getMonth() === n.getMonth() &&
        d.getFullYear() === n.getFullYear()
      );
    });
    const totalText = el(
      "p",
      "",
      {},
      document.createTextNode(
        `Since May 30th, 2022 we've received ${visits.length} visits`
      )
    );
    const dailyText = el(
      "p",
      "",
      {},
      document.createTextNode(
        `Today, we've received ${visitsToday.length} visits`
      )
    );
    const visitsDiv = document.querySelector("#visits");
    visitsDiv.appendChild(totalText);
    visitsDiv.appendChild(dailyText);
  })
  .catch(console.error);

/**
 * 2. HoF related code
 */
fetch("http://localhost:8080/wpgbingo/hof")
  .then(resJson)
  .then(({ hofers }) => {
    document
      .querySelector("#wof-count")
      .appendChild(document.createTextNode(`: ${hofers.length}`));
    hofers.forEach(showHofer);
  })
  .catch(console.error);

function handleHofInput(event) {
  document.querySelector(".hof-input-fields").classList.remove("hide");
}

function cancelHofer() {
  document.querySelector(".hof-input-fields").classList.add("hide");
}

function saveHofer() {
  // build body
  const hofer = {
    name: document.querySelector("#name-input").value,
    date: document.querySelector("#date-input").value,
    img: document.querySelector("#img-input").value,
    map: document.querySelector("#map-input").value,
  };
  const req = new Request("http://localhost:8080/wpgbingo/hof", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ hofer }),
  });
  fetch(req)
    .then(resJson)
    .then((res) => {
      console.log("Creation res:", res);
      showHofer(hofer);
    })
    .catch(console.error);
}

function showHofer(hofer) {
  const display = el(
    "div",
    "hofer-data",
    {},
    el("h3", "", { name: hofer.name }, t(hofer.name)),
    el("h4", "", {}, t(hofer.date)),
    el("img", "", { src: hofer.img }),
    el("a", "", { href: hofer.map }, t("Link to map")),
    el(
      "button",
      "",
      { onclick: `removeHofer("${hofer.name}")` },
      t("Remove from Wall")
    )
  );
  document.querySelector("#hof").appendChild(display);
}

function removeHofer(name) {
  const del = confirm(`Do you really want to delete ${name}`);
  if (del) {
    fetch(`http://localhost:8080/wpgbingo/hof/${name}`, { method: "DELETE" })
      .then(resJson)
      .then(console.log)
      .catch(console.error);
    const displayToRemove = document.querySelector(
      `h3[name="${name}"]`
    ).parentElement;
    displayToRemove.parentElement.removeChild(displayToRemove);
  }
}
