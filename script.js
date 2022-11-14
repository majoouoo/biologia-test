const checkBtn = document.getElementById("checkBtn")
const nextBtn = document.getElementById("nextBtn")
const imageEl = document.getElementById("image")

const numbers = [1,2,3,4,5,6,7,8,10,11,12,13,14,16,18,19,20,21,25]

const generateNumber = () => {
    let randomNum = Math.round(Math.random() * numbers.length)
    randomNum = numbers[randomNum]
    return(randomNum)
}

nextBtn.addEventListener("click", () => {
    imageEl.src = "./" + generateNumber() + ".png"
})