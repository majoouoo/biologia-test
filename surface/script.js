const mapNames = {
    1: "Ural",
    2: "West Siberian Plain",
    3: "Central Siberian Plateau",
    4: "Verkhoyansk Range",
    5: "Cherskogo Range",
    6: "Kolyma Range",
    7: "Greater Khingan Range",
    8: "North China Plain",
    9: "Eastern Ghats",
    10: "Western Ghats",
    11: "Deccan Plateau",
    12: "Indo-Gangetic Plain",
    13: "Himalayas",
    14: "Tibetan Plateau",
    15: "Kun-lun Shan",
    16: "Tarim Basin",
    17: "Tian Shan",
    18: "Hindu Kush",
    19: "Pamir",
    20: "Turan Depression",
    21: "Kazakh Uplands",
    22: "Altay",
    23: "Elburz",
    24: "Iranian Plateau",
    25: "Zagros",
    26: "Mesopotamian Plain",
    27: "Taurus Mountains",
    28: "Anatolian Plateau",
    29: "Pontic Mountains",
    30: "Caucasus"
}

const inputEl = document.getElementById("input")
const checkBtn = document.getElementById("checkBtn")
const resultEl = document.getElementById("result")
const answerBtn = document.getElementById("answerBtn")

const generateNum = () => {
    const randomNum = Math.ceil(Math.random() * 30)
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
