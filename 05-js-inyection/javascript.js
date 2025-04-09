/* Paragraph */

const paragraphContainer = document.querySelector(".content");

const paragraph = document.createElement("p");

paragraph.style.color = "red";
paragraph.textContent = "Hey I’m red!";
paragraphContainer.appendChild(paragraph);

/* h3 */

const h3Element = document.createElement('h3');
h3Element.style.color = "blue";
h3Element.textContent = "I’m a blue h3!";
paragraphContainer.appendChild(h3Element); // Appending to the same container for now




/* div with other elements inside */

const divContainer = document.querySelector(".content");
const divElement = document.createElement ("div");
divElement.style.background = "pink";
divElement.style.border = "3px solid black";

// Create the h1 inside the div
const h1InDiv = document.createElement("h1");
h1InDiv.textContent = "I’m in a div";
divElement.appendChild(h1InDiv);

// Create the p inside the div
const pInDiv = document.createElement("p");
pInDiv.textContent = "ME TOO!";
divElement.appendChild(pInDiv);

// Append the div to the container
divContainer.appendChild(divElement);
