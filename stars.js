const countDisplay = document.querySelector("#count");
const control = document.querySelector(".control");
const stars = document.querySelector("#stars");

const makeStar = () => {
  const newStar = document.createElement("img");
  newStar.setAttribute("src", "Star.png");
  newStar.setAttribute("width", "50px");
  stars.appendChild(newStar);
};

let count = 0;

const increment = (e) => {
  stars.innerHTML = "";
  e.target.id === "add-btn" ? ++count : --count;
  countDisplay.innerHTML = count;
  if (count < 0) {
    stars.innerHTML = "<h2>Must Be Greater Than Zero!</h2>";
  }
  for (let i = 0; i < count; i++) {
    makeStar();
  }
};

control.addEventListener("click", increment);
