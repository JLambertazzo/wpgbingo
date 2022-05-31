// Import this script first in your html for the element generation utility
function el(tag, classes, attributes, ...children) {
  const element = document.createElement(tag);
  if (classes.length > 0) element.classList.add(...classes.split(" "));
  Object.entries(attributes).forEach(([key, val]) =>
    element.setAttribute(key, val)
  );
  children.forEach((child) => element.appendChild(child));
  return element;
}

function t(text) {
  return document.createTextNode(text);
}
