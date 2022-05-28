const container = document.querySelector("#container");

const red = document.createElement("p");
red.style.cssText = "color: red;";
red.textContent = "Hey I'm red!";
container.appendChild(red);

const blue = document.createElement("h3");
blue.style.cssText = "color: blue;";
blue.textContent = "I'm a blue h3!";
container.appendChild(blue);

const div = document.createElement("div");
const subDiv = document.createElement("div");
subDiv.textContent = "I'm in a div";
const subP = document.createElement("p");
subP.textContent = "ME TOO!";
div.style.cssText = "border-color: black; border-style: solid; background-color: pink;";
container.appendChild(div);
div.appendChild(subDiv);
div.appendChild(subP);

