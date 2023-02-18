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

asiaBtn.addEventListener("click", () => {
  if(asiaBtn.style.top === "0px") {
    asiaBtn.style.top = "-250px"
    americaBtn.style.top = "0px"
  } else {
    asiaBtn.style.top = "0px"
  }
})

americaBtn.addEventListener("click", () => {
  if(americaBtn.style.top === "0px") {
    americaBtn.style.top = "-250px"
    asiaBtn.style.top = "0px"
  } else {
    americaBtn.style.top = "0px"
  }
})