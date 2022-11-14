const checkBtn = document.getElementById("checkBtn")
const nextBtn = document.getElementById("nextBtn")
const imageEl = document.getElementById("image")
const solutionEl = document.getElementById("solution")

const numbers = [1,2,3,4,5,6,7,8,10,11,12,13,14,16,18,19,20,21,25]

const solutions = {
    "1": "stratified squamous",
    "2": "transitional stratified",
    "3": "simple columnar",
    "4": "glandular",
    "5": "simple cuboidal",
    "6": "simple cuboidal",
    "7": "smell sense cells",
    "8": "taste sense cells",
    "10": "loose C.T.",
    "11": "adipose tissue",
    "12": "fibrose C.T.",
    "13": "hyaline cartilage",
    "14": "elastic cartilage",
    "16": "compact bone",
    "18": "smooth tissue",
    "19": "skeletal muscle tissue",
    "20": "cardiac muscle tissue",
    "21": "neural tissue",
    "25": "blood tissue"
}

nextBtn.addEventListener("click", () => {
    let randomNum = Math.round(Math.random() * numbers.length - 1)
    randomNum = numbers[randomNum]
    imageEl.src = "./" + randomNum + ".png"
    localStorage.setItem("randomNum", randomNum)
    solutionEl.innerHTML = ""
})

checkBtn.addEventListener("click", () => {
    const randomNum = localStorage.getItem("randomNum")
    randomNum.substring(2, randomNum.indexOf("."))
    solutionEl.innerHTML = solutions[randomNum]
})