const mapNames = {
    1: "American Cordillera",
    2: "Appalachian Mountains",
    3: "Rocky Mountains",
    4: "Coastal Range",
    5: "Alaska Range",
    6: "Sierra Nevada",
    7: "Sierra Madre Oriental",
    8: "Sierra Madre Occidental",
    9: "Laurentian Plateau",
    10: "Colorado Plateau",
    11: "Mexican Plateau",
    12: "Great Plains",
    13: "Mississippi Aluvial Plain",
    14: "Gulf Coastal Plain",
    15: "Mojave Desert",
    16: "Sonoran Desert",
    17: "Isthmus of Tehuantepec",
    18: "Andes",
    19: "Guiana Highlands",
    20: "Brazilian Highlands",
    21: "Pampas",
    22: "Patagonia",
    23: "Mato Grosso Plateau",
    24: "Altiplano",
    25: "Amazon Basin",
    26: "Rio de la Plata Basin",
    27: "Orinoco Plain",
    28: "Atacama Desert"
}

const inputEl = document.getElementById("input")
const checkBtn = document.getElementById("checkBtn")
const resultEl = document.getElementById("result")
const answerBtn = document.getElementById("answerBtn")

const generateNum = () => {
    const randomNum = Math.ceil(Math.random() * 28)
    return randomNum
}

const changeColor = (randomNum, color) => {
    document.querySelector("#b" + randomNum + " svg")
        ? document.getElementById("b" + randomNum).children[0].children[0].style.stroke = color
        : document.getElementById("b" + randomNum).style.background = color
}

const checkAnswer = () => {
    if (inputEl.value.toUpperCase() == mapNames[localStorage.getItem("randomNum")].toUpperCase()) {
        resultEl.innerHTML = "Správne"
        resultEl.style.color = "green"
        // reset
        inputEl.value = ""
        changeColor(localStorage.getItem("randomNum"), "")
        // generate new
        const randomNum = generateNum()
        localStorage.setItem("randomNum", randomNum)
        changeColor(localStorage.getItem("randomNum"), "red")
    } else if (inputEl.value.toUpperCase() != mapNames[localStorage.getItem("randomNum")].toUpperCase()) {
        resultEl.innerHTML = "Zle"
        resultEl.style.color = "red"
    }
}

const randomNum = generateNum()
localStorage.setItem("randomNum", randomNum)
changeColor(localStorage.getItem("randomNum"), "red")

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
        changeColor(localStorage.getItem("randomNum"), "")
        const randomNum = generateNum()
        localStorage.setItem("randomNum", randomNum)
        changeColor(localStorage.getItem("randomNum"), "red")
        resultEl.innerHTML = ""
    }, 1500)
})