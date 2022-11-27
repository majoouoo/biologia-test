const mapNames = {
    1: "Severnaya Zemlya",
    2: "New Siberian Islands",
    3: "Wrangel",
    4: "Kuril Islands",
    5: "Sakhalin",
    6: "Hokkaido",
    7: "Honshu",
    8: "Shikoku",
    9: "Kyushu",
    10: "Taiwan",
    11: "Luzon",
    12: "Mindanao",
    13: "Sulawesi",
    14: "Moluccas",
    15: "Timor",
    16: "Lesser Sunda Islands",
    17: "Java",
    18: "Sumatra",
    19: "Andaman Islands",
    20: "Nicobar Islands",
    21: "Sri Lanka",
    22: "Maldives",
    23: "Lakshadweep",
    24: "Cyprus",
    25: "Hainan",
    26: "Borneo"
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
        document.getElementById("b" + localStorage.getItem("randomNum")).style.background = ""
        const randomNum = generateNum()
        localStorage.setItem("randomNum", randomNum)
        document.getElementById("b" + localStorage.getItem("randomNum")).style.background = "red"
        resultEl.innerHTML = ""
    }, 1500)
})
