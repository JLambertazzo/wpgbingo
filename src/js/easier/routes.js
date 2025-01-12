const loops = [
  {
    ids: [1, 2, 3, 6, 8, 11, 12, 13],
    url: "https://t.ly/sHLy",
    dist: "35 km",
    name: "south",
  },
  {
    ids: [3, 4, 5, 8, 10, 13, 14, 15],
    url: "https://t.ly/erR8",
    dist: "52 km",
    name: "west",
  },
  {
    ids: [12, 13, 17, 18, 19, 22, 23, 24],
    url: "https://tinyurl.com/3h2fuaku",
    dist: "31 km",
    name: "north",
  },
  {
    ids: [11, 12, 13, 16, 18, 21, 22, 23],
    url: "https://tinyurl.com/yfvasuct",
    dist: "41 km",
    name: "east",
  },
];

const diagonals = [
  {
    ids: [1, 7, 13, 19, 25],
    url: "https://t.ly/n0uj",
    dist: "34 km",
    name: "left",
  },
  {
    ids: [5, 9, 13, 17, 21],
    url: "https://t.ly/yRjz",
    dist: "26 km",
    name: "right",
  },
];

const columns = [
  {
    ids: [1, 6, 11, 16, 21],
    url: "https://tinyurl.com/3x6xwnfz",
    dist: "29 km",
    name: "1",
  },
  {
    ids: [2, 7, 12, 17, 22],
    url: "https://t.ly/YgcA",
    dist: "25 km",
    name: "2",
  },
  {
    ids: [3, 8, 13, 18, 23],
    url: "https://t.ly/PNBp",
    dist: "24 km",
    name: "3",
  },
  {
    ids: [4, 9, 14, 19, 24],
    url: "https://tinyurl.com/4zkhysu7",
    dist: "26 km",
    name: "4",
  },
  {
    ids: [5, 10, 15, 20, 25],
    url: "https://t.ly/a2uY",
    dist: "26 km",
    name: "5",
  },
];

const rows = [
  {
    ids: [1, 2, 3, 4, 5],
    url: "https://t.ly/pGrv",
    dist: "30 km",
    name: "1",
  },
  {
    ids: [6, 7, 8, 9, 10],
    url: "https://t.ly/fyJB",
    dist: "24 km",
    name: "2",
  },
  {
    ids: [11, 12, 13, 14, 15],
    url: "https://t.ly/R2AH7",
    dist: "15 km",
    name: "3",
  },
  {
    ids: [16, 17, 18, 19, 20],
    url: "https://t.ly/OQl7",
    dist: "27 km",
    name: "4",
  },
  {
    ids: [21, 22, 23, 24, 25],
    url: "https://tinyurl.com/mr3sybsf",
    dist: "36 km",
    name: "5",
  },
];

const routes = [...rows, ...columns, ...diagonals, ...loops];

const hardcodeRoute = {
  ids: new Array(25).fill(0).map((_, i) => i + 1),
  url: "https://t.ly/ykrjB",
  dist: "131 km",
};
