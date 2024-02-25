const loops = [
  {
    name: "west",
    ids: [15],
    url: "https://bit.ly/wpg-bingo-west-loop",
    dist: "27 km",
  },
  {
    name: "north",
    ids: [13, 22, 23],
    url: "https://bit.ly/wpg-bingo-north-loop",
    dist: "25 km",
  },
  {
    name: "east",
    ids: [22],
    url: "https://bit.ly/wpg-bingo-east-loop",
    dist: "19 km",
  },
  {
    name: "south",
    ids: [2, 8, 9, 11, 13],
    url: "https://bit.ly/wpg-bingo-south-loop",
    dist: "32 km",
  },
];

const rows = [
  {
    ids: [1, 2, 3, 4, 5],
    url: "https://bit.ly/wpg-bingo-first-row",
    dist: "31 km",
    name: "1",
  },
  {
    ids: [6, 7, 8, 9, 10],
    url: "https://bit.ly/wpg-bingo-second-row",
    dist: "17 km",
    name: "2",
  },
  {
    ids: [11, 12, 13, 14, 15],
    url: "https://bit.ly/wpg-bingo-third-row",
    dist: "21 km",
    name: "3",
  },
  {
    ids: [16, 17, 18, 19, 20],
    url: "https://bit.ly/wpg-bingo-fourth-row",
    dist: "18 km",
    name: "4",
  },
  {
    ids: [21, 22, 23, 24, 25],
    url: "https://bit.ly/wpg-bingo-fifth-row",
    dist: "31 km",
    name: "5",
  },
];

const columns = [
  {
    ids: [1, 6, 11, 16, 21],
    url: "https://bit.ly/wpg-bingo-first-column",
    dist: "20 km",
    name: "1",
  },
  {
    ids: [2, 7, 12, 17, 22],
    url: "https://bit.ly/wpg-bingo-second-column",
    dist: "20 km",
    name: "2",
  },
  {
    ids: [3, 8, 13, 18, 23],
    url: "https://bit.ly/wpg-bingo-third-column",
    dist: "29 km",
    name: "3",
  },
  {
    ids: [4, 9, 14, 19, 24],
    url: "https://bit.ly/wpg-bingo-fourth-column",
    dist: "45 km",
    name: "4",
  },
  {
    ids: [5, 10, 15, 20, 25],
    url: "https://bit.ly/wpg-bingo-fifth-column-fix",
    dist: "31 km",
    name: "5",
  },
];

const diagonals = [
  {
    ids: [1, 7, 13, 19, 25],
    url: "https://bit.ly/wpg-bingo-diagonal-left",
    dist: "27 km",
    name: "left",
  },
  {
    ids: [5, 9, 13, 17, 21],
    url: "https://bit.ly/wpg-bingo-diagonal-right-fixed",
    dist: "27 km",
    name: "right",
  },
];

const routes = [...rows, ...columns, ...diagonals, ...loops];

const hardcodeRoute = {
  ids: new Array(25).fill(0).map((_, i) => i + 1),
  url: "https://bit.ly/wpg-bingo-harder-hardcore-fix",
  dist: "137 km",
};
