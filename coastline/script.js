const mapNames = {
    1: "Kara Sea",
    2: "Yamal",
    3: "Taymyr",
    4: "Laptev Sea",
    5: "East Siberian Sea",
    6: "Chukchi Sea",
    7: "Chukotka",
    8: "Bering Strait",
    9: "Gulf of Anadyr",
    10: "Bering Sea",
    11: "Kamchatka Peninsula",
    12: "Sea of Okhotsk",
    13: "Strait of Tartary",
    14: "Sea of Japan",
    15: "Korea Strait",
    16: "Korean Peninsula",
    17: "Bohai Gulf",
    18: "Shandong Peninsula",
    19: "Yellow Sea",
    20: "East China Sea",
    21: "Taiwan Strait",
    22: "Luzon Strait",
    23: "Gulf of Tonkin",
    24: "South China Sea",
    25: "Gulf of Thailand",
    26: "Malay Peninsula",
    27: "Andaman Sea",
    28: "Strait of Malacca",
    29: "Java Sea",
    30: "Timor Sea",
    31: "Bay of Bengal",
    32: "Indian Subcontinent",
    33: "Malabar Coast",
    34: "Arabian Sea",
    35: "Gulf of Oman",
    36: "Strait of Hormuz",
    37: "Persian Gulf",
    38: "Arabian Peninsula",
    39: "Bab el-Mandeb",
    40: "Gulf of Aden",
    41: "Red Sea",
    42: "Sinai Peninsula",
    43: "Asia Minor",
    44: "Farther India"
}

const inputEl = document.getElementById("input")
const checkBtn = document.getElementById("checkBtn")
const resultEl = document.getElementById("result")
const answerBtn = document.getElementById("answerBtn")

const generateNum = () => {
    const randomNum = Math.ceil(Math.random() * 44)
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