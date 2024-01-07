const cards = document.getElementsByClassName("card-inside");
const borders = document.getElementsByClassName("card-border");

const handleMouseMove = e => {
  const targetCard = e.target
  const cardRect = targetCard.getBoundingClientRect();

  const cardX = e.clientX - cardRect.x;
  const cardY = e.clientY - cardRect.y;
  
  targetCard.style.setProperty("--mouse-x", cardX + "px");
  targetCard.style.setProperty("--mouse-y", cardY + "px");

  for(border of borders) {
    const borderRect = border.getBoundingClientRect();

    const borderX = e.clientX - borderRect.x;
    const borderY = e.clientY - borderRect.y;

    border.style.setProperty("--mouse-x", borderX + "px");
    border.style.setProperty("--mouse-y", borderY + "px");
  }
  
}

for(card of cards) {
  card.addEventListener("mousemove", e => handleMouseMove(e));
}

const asiaBtn = document.getElementById("asia-btn")
const americaBtn = document.getElementById("america-btn")
const africaBtn = document.getElementById("africa-btn")
const skeletonBtn = document.getElementById("skeleton-btn")
const slovakiaBtn = document.getElementById("slovakia-btn")
asiaBtn.style.top = "0px"
americaBtn.style.top = "0px"
africaBtn.style.top = "0px"
skeletonBtn.style.top = "0px"
slovakiaBtn.style.top = "0px"

const colorToGray = () => {
  document.querySelector("body").style.backgroundColor = "rgb(18, 18, 18)"
  for(card of cards) {
    card.style.backgroundColor = "rgb(22, 22, 22)"
  }
  for(border of borders) {
    border.style.backgroundColor = "rgb(44, 44, 44)"
  }
}

const colorToGreen = () => {
  document.querySelector("body").style.backgroundColor = "#021b14"
  for(card of cards) {
    card.style.backgroundColor = "#02291d"
  }
  for(border of borders) {
    border.style.backgroundColor = "#175e4c"
  }
}

const moveCard = (e) => {
  const clickedCard = e.target.parentElement

  if(window.innerWidth < 800) {
    if(clickedCard.style.left === "250px") {
      clickedCard.style.left = "0px"
      colorToGray()
    } else {
      for(border of borders) {
        border.style.left = "0px"
      }
      clickedCard.style.left = "250px"
      colorToGreen()
    }
  } else {
    if(clickedCard.style.top === "-250px") {
      clickedCard.style.top = "0px"
      colorToGray()
    } else {
      for(border of borders) {
        border.style.top = "0px"
      }
      clickedCard.style.top = "-250px"
      colorToGreen()
    }
  }
}

asiaBtn.addEventListener("click", (e) => moveCard(e))
americaBtn.addEventListener("click", (e) => moveCard(e))
africaBtn.addEventListener("click", (e) => moveCard(e))
skeletonBtn.addEventListener("click", (e) => moveCard(e))
slovakiaBtn.addEventListener("click", (e) => moveCard(e))