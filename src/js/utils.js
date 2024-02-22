// small functionalities I use
const resJson = (res) => res.json();

/**
 * Check two arrays to see if they have exactly the same contents
 * @param {any[]} a
 * @param {any[]} b
 * @returns {boolean} Whether arrays are equal
 */
const arrayEquals = (a, b) =>
  a.reduce((result, el, i) => result && el === b[i], true);
