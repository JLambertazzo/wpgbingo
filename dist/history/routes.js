const loops = [
  {
    ids: [7, 12, 8, 18, 13],
    url: "https://bit.ly/history-central-loop",
    dist: "7 km",
    name: "central",
  },
  {
    ids: [8, 16, 21, 26, 27],
    url: "https://bit.ly/history-east-loop",
    dist: "37 km",
    name: "east",
  },
  {
    ids: [1, 6, 11, 17, 22, 8],
    url: "https://bit.ly/history-southeast-loop",
    dist: "30 km",
    name: "southeast",
  },
  {
    ids: [14, 9, 15, 20],
    url: "https://bit.ly/history-west-loop",
    dist: "26 km",
    name: "west",
  },
  {
    ids: [28, 29, 23, 8, 16, 27],
    url: "https://bit.ly/history-north-loop",
    dist: "23 km",
    name: "north",
  },
];

const columns = [
  {
    ids: [1, 6, 11, 16, 21, 26],
    url: "https://bit.ly/history-c1",
    dist: "31 km",
    name: "1",
  },
  {
    ids: [2, 7, 12, 17, 22, 27],
    url: "https://bit.ly/history-c2",
    dist: "28 km",
    name: "2",
  },
  {
    ids: [3, 8, 13, 18, 23, 28],
    url: "https://bit.ly/history-c3",
    dist: "32 km",
    name: "3",
  },
  {
    ids: [4, 9, 14, 19, 24, 29],
    url: "https://bit.ly/history-c4",
    dist: "54 km",
    name: "4",
  },
  {
    ids: [5, 10, 15, 20, 25, 30],
    url: "https://bit.ly/history-c5",
    dist: "33 km",
    name: "5",
  },
];

const rows = [
  {
    ids: [1, 2, 3, 4, 5],
    url: "https://bit.ly/history-r1",
    dist: "19 km",
    name: "1",
  },
  {
    ids: [6, 7, 8, 9, 10],
    url: "https://bit.ly/history-r2",
    dist: "38 km",
    name: "2",
  },
  {
    ids: [11, 12, 13, 14, 15],
    url: "https://bit.ly/history-r3-fix",
    dist: "30 km",
    name: "3",
  },
  {
    ids: [16, 17, 18, 19, 20],
    url: "https://bit.ly/history-r4",
    dist: "14 km",
    name: "4",
  },
  {
    ids: [21, 22, 23, 24, 25],
    url: "https://bit.ly/history-r5",
    dist: "31 km",
    name: "5",
  },
  {
    ids: [26, 27, 28, 29, 30],
    url: "https://bit.ly/history-r6",
    dist: "33 km",
    name: "6",
  },
];

const routes = [...rows, ...columns, ...loops];

const hardcodeRoute = {
  ids: new Array(30).fill(0).map((_, i) => i + 1),
  url: "https://bit.ly/history-hardcore",
  dist: "142 km",
};

// needed because of shared route logic
const diagonals = [];
