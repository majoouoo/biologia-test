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

// declare elements
const inputEl = document.getElementById("input")
const answerBtn = document.getElementById("answerBtn")
const checkBtn = document.getElementById("checkBtn")
const showAllBtn = document.getElementById("showAllBtn")
const resultEl = document.getElementById("result")
const mapList = document.getElementById("mapList")
const mapBtns = document.getElementsByClassName("mapBtn")

// generate a number and add a class
const generateNum = () => {
    const chosenNum = Math.ceil(Math.random() * Object.keys(mapNames).length)
    document.getElementById("b" + chosenNum).classList.add("activeBtn")
}

// check answer
const checkAnswer = () => {
    const chosenNum = document.getElementsByClassName("activeBtn")[0].id.substring(1)
    const chosenEl = document.getElementsByClassName("activeBtn")[0]

    if (inputEl.value.toUpperCase() == mapNames[chosenNum].toUpperCase()) {
        resultEl.innerHTML = "Správne"
        resultEl.style.color = "green"
        // reset
        inputEl.value = ""
        chosenEl.classList.remove("activeBtn")
        // generate new
        generateNum()
    } else if (inputEl.value.toUpperCase() != mapNames[chosenNum].toUpperCase()) {
        resultEl.innerHTML = "Zle"
        resultEl.style.color = "red"
    }
}

// ok button + enter
document.addEventListener('keypress', e => e.key === 'Enter' ? checkAnswer() : null)
checkBtn.addEventListener("click", () => checkAnswer())

// show correct answer
answerBtn.addEventListener("click", () => {
    const chosenNum = document.getElementsByClassName("activeBtn")[0].id.substring(1)
    const chosenEl = document.getElementsByClassName("activeBtn")[0]

    resultEl.innerHTML = mapNames[chosenNum]
    resultEl.style.color = "black"
    answerBtn.disabled = true
    setTimeout(() => {
        inputEl.value = ""
        chosenEl.classList.remove("activeBtn")
        generateNum()
        resultEl.innerHTML = ""
        answerBtn.disabled = false
    }, 1500)
})

// show list of map buttons
const showMapList = () => {
    const leftListCount = Math.ceil(Object.keys(mapNames).length / 2)

    for (mapName in mapNames) {
        const el = mapName <= leftListCount
            ? leftList.appendChild(document.createElement("p"))
            : rightList.appendChild(document.createElement("p"))

        el.innerHTML = mapNames[mapName]
        el.addEventListener("click", () => {
            const mapBtn = "b" + Object.keys(mapNames).find(key => mapNames[key] === el.innerHTML)

            document.getElementById(mapBtn).classList.add("visibleMapBtn")

            setTimeout(() => document.getElementById(mapBtn).classList.remove("visibleMapBtn"), 1500)
        })
    }
}

// initialize
generateNum()
showMapList()