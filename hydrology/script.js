const mapNames = {
    1: "Ob",
    2: "Irtysh",
    3: "Yenisey",
    4: "Angara",
    5: "Baikal",
    6: "Amur",
    7: "Lena",
    8: "Jana",
    9: "Indigirka",
    10: "Kolyma",
    11: "Yangtze",
    12: "Huang He",
    13: "Xi",
    14: "Mekong",
    15: "Tonle Sap",
    16: "Menam",
    17: "Salween",
    18: "Irrawaddy",
    19: "Ganges",
    20: "Brahmaputra",
    21: "Indus",
    22: "Amur Darya",
    23: "Syr Darya",
    24: "Ural",
    25: "Emba",
    26: "Urmia",
    27: "Van",
    28: "Euphrates",
    29: "Tigris",
    30: "Caspian Sea",
    31: "Lake Balkhash",
    32: "Aral Sea",
    33: "Dead Sea",
    34: "Lake Issyk-Kul"
}

const inputEl = document.getElementById("input")
const checkBtn = document.getElementById("checkBtn")
const resultEl = document.getElementById("result")
const answerBtn = document.getElementById("answerBtn")

const generateNum = () => {
    const randomNum = Math.ceil(Math.random() * 34)
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