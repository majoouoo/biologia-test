const mapNames = {
    1: "Kyzylkum",
    2: "Kara Kum",
    3: "Great Salt Desert",
    4: "Lut",
    5: "Thar",
    6: "Taklamakan",
    7: "Gobi",
    8: "Syrian",
    9: "Negev",
    10: "an Nafud",
    11: "al Dahna",
    12: "Rub al-Khali"
}

const inputEl = document.getElementById("input")
const checkBtn = document.getElementById("checkBtn")
const resultEl = document.getElementById("result")
const answerBtn = document.getElementById("answerBtn")

const generateNum = () => {
    const randomNum = Math.ceil(Math.random() * 12)
    return randomNum
}

const checkAnswer = () => {
    if (inputEl.value.toUpperCase() == mapNames[localStorage.getItem("randomNum")].toUpperCase()) {
        resultEl.innerHTML = "Správne"
        resultEl.style.color = "green"
        // reset
        inputEl.value = ""
        document.getElementById("b" + localStorage.getItem("randomNum")).style.background = ""
        // generate new
        const randomNum = generateNum()
        localStorage.setItem("randomNum", randomNum)
        document.getElementById("b" + localStorage.getItem("randomNum")).style.background = "red"
    } else if (inputEl.value.toUpperCase() != mapNames[localStorage.getItem("randomNum")].toUpperCase()) {
        resultEl.innerHTML = "Zle"
        resultEl.style.color = "red"
    }
}


const randomNum = generateNum()
localStorage.setItem("randomNum", randomNum)
document.getElementById("b" + localStorage.getItem("randomNum")).style.background = "red"

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkAnswer()
    }
})

checkBtn.addEventListener("click", () => {
    checkAnswer()
})

answerBtn.addEventListener("click", () => {
    resultEl.innerHTML = mapNames[localStorage.getItem("randomNum")]
    resultEl.style.color = "black"
    setTimeout(() => {
        document.getElementById("b" + localStorage.getItem("randomNum")).style.background = ""
        const randomNum = generateNum()
        localStorage.setItem("randomNum", randomNum)
        document.getElementById("b" + localStorage.getItem("randomNum")).style.background = "red"
        resultEl.innerHTML = ""
    }, 1500)
})
