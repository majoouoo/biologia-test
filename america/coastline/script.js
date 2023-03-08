const mapNames = {
    1: "Labrador",
    2: "Alaska",
    3: "Florida",
    4: "Baja California",
    5: "Yucatan",
    6: "Gulf of Mexico",
    7: "Gulf of California",
    8: "Gulf of Alaska",
    9: "Hudson Bay",
    10: "Gulf of St Lawrence",
    11: "Bay of Campeche",
    12: "Gulf of Honduras",
    13: "Straits of Florida",
    14: "Davis Strait",
    15: "Hudson Strait",
    16: "Bering Strait",
    17: "Yucatan Channel",
    18: "Panama Canal",
    19: "Baffin Bay",
    20: "Bering Sea",
    21: "Beaufort Sea",
    22: "Labrador Sea",
    23: "Sargasso Sea",
    24: "Carribean Sea",
    25: "Strait of Magellan",
    26: "Rio de la Plata"
}

const inputEl = document.getElementById("input")
const checkBtn = document.getElementById("checkBtn")
const resultEl = document.getElementById("result")
const answerBtn = document.getElementById("answerBtn")

const generateNum = () => {
    const randomNum = Math.ceil(Math.random() * 26)
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
        inputEl.value = ""
        document.getElementById("b" + localStorage.getItem("randomNum")).style.background = ""
        const randomNum = generateNum()
        localStorage.setItem("randomNum", randomNum)
        document.getElementById("b" + localStorage.getItem("randomNum")).style.background = "red"
        resultEl.innerHTML = ""
    }, 1500)
})
