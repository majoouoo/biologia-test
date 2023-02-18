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
asiaBtn.style.top = "0px"
americaBtn.style.top = "0px"

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

asiaBtn.addEventListener("click", () => {
  if(window.innerWidth < 800) {
    if(asiaBtn.style.left === "200px") {
      asiaBtn.style.left = "0px"

      colorToGray()
    } else {
      asiaBtn.style.left = "200px"
      americaBtn.style.left = "0px"

      colorToGreen()
    }
  } else {
    if(asiaBtn.style.top === "-250px") {
      asiaBtn.style.top = "0px"

      colorToGray()
    } else {
      asiaBtn.style.top = "-250px"
      americaBtn.style.top = "0px"

      colorToGreen()
    }
  }
})

americaBtn.addEventListener("click", () => {
  if(window.innerWidth < 800) {
    if(americaBtn.style.left === "200px") {
      americaBtn.style.left = "0px"

      colorToGray()
    } else {
      americaBtn.style.left = "200px"
      asiaBtn.style.left = "0px"

      colorToGreen()
    }
  } else {
    if(americaBtn.style.top === "-250px") {
      americaBtn.style.top = "0px"

      colorToGray()
    } else {
      americaBtn.style.top = "-250px"
      asiaBtn.style.top = "0px"

      colorToGreen()
    }
  }
})