/**
 * 0. Run after password input
 */
const password = prompt("enter admin password");
// const authReq = new Request("http://localhost:8080/auth/login", {
const authReq = new Request("https://gen-pup.herokuapp.com/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({ auth: { slug: "wpgbingo", password } }),
});
fetch(authReq)
  .then(resJson)
  .then(({ authenticated }) => {
    if (authenticated) {
      // reveal site
      document.body.classList.remove("hide");
      // fetch("http://localhost:8080/visits/wpgbingo")
      fetch("https://gen-pup.herokuapp.com/visits/wpgbingo")
        .then(resJson)
        .then(loadVisits)
        .catch(console.error);

      // fetch("http://localhost:8080/wpgbingo/hof")
      fetch("https://gen-pup.herokuapp.com/wpgbingo/hof")
        .then(resJson)
        .then(loadHofers)
        .catch(console.error);
    }
  })
  .catch(console.error);

/**
 * 1. Visit count related code
 */

function loadVisits({ visits }) {
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
}

/**
 * 2. HoF related code
 */
function loadHofers({ hofers }) {
  document
    .querySelector("#wof-count")
    .appendChild(document.createTextNode(`: ${hofers.length}`));
  hofers.forEach(showHofer);
}

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
  // const req = new Request("http://localhost:8080/wpgbingo/hof", {
  const req = new Request("https://gen-pup.herokuapp.com/wpgbingo/hof", {
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
    el("h4", "", {}, t(new Date(hofer.date).toUTCString())),
    el("img", "", { src: hofer.img, width: "200px" }),
    el("br", "", {}),
    el("a", "", { href: hofer.map }, t("Link to map")),
    el("br", "", {}),
    el(
      "button",
      "",
      { onclick: `removeHofer("${hofer.name}")` },
      t("Remove from Wall")
    ),
    el("hr", "", {})
  );
  document.querySelector("#hof").appendChild(display);
}

function removeHofer(name) {
  const del = confirm(`Do you really want to delete ${name}`);
  if (del) {
    // fetch(`http://localhost:8080/wpgbingo/hof/${name}`, { method: "DELETE" })
    fetch(`https://gen-pup.herokuapp.com/wpgbingo/hof/${name}`, {
      method: "DELETE",
    })
      .then(resJson)
      .then(console.log)
      .catch(console.error);
    const displayToRemove = document.querySelector(
      `h3[name="${name}"]`
    ).parentElement;
    displayToRemove.parentElement.removeChild(displayToRemove);
  }
}
