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
  .then(console.log)
  .catch(console.error);

function handleHofInput() {
  if (document.querySelector("#name-input")) return;
  const input = el(
    "div",
    "hof-fields",
    { id: "active-hof-fields" },
    el("input", "", { placeholder: "Name", name: "name", id: "name-input" }),
    el("input", "", { type: "date", name: "date", id: "date-input" }),
    el("input", "", {
      placeholder: "Image Link",
      name: "img",
      id: "img-input",
    }),
    el("input", "", { placeholder: "Map Link", name: "map", id: "map-input" }),
    el(
      "button",
      "",
      { onclick: "saveHofer()" },
      document.createTextNode("Create")
    ),
    el(
      "button",
      "",
      { onclick: "cancelHofer()" },
      document.createTextNode("Cancel")
    )
  );
  document.querySelector("#hof").appendChild(input);
}

function cancelHofer() {
  const fields = document.querySelector("#active-hof-fields");
  if (!fields) return;
  fields.parentElement.removeChild(fields);
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
    },
    body: { hofer },
  });
  fetch(req).then(resJson).then(console.log).catch(console.error);
}
