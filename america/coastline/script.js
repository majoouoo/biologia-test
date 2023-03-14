const mapNames = {
    1: "Labrador",
    2: "Alaska",
    3: "Florida",
    4: "Baja California Peninsula",
    5: "Yucatán",
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
    17: "Yucatán Channel",
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

// declare elements
const inputEl = document.getElementById("input")
const answerBtn = document.getElementById("answerBtn")
const checkBtn = document.getElementById("checkBtn")
const showAllBtn = document.getElementById("showAllBtn")
const resultEl = document.getElementById("result")
const mapList = document.getElementById("mapList")
const mapBtns = document.getElementsByClassName("mapBtn")
const hideBtn = document.getElementById("hideBtn")

// generate a number and add a class
const generateNum = () => {
    const chosenNum = Math.ceil(Math.random() * Object.keys(mapNames).length)
    document.getElementById("b" + chosenNum).classList.add("activeBtn")
}

// convert string to uppercase without accents
const convertString = (string) => {
    return string.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

// check answer
const checkAnswer = () => {
    const chosenNum = document.getElementsByClassName("activeBtn")[0].id.substring(1)
    const chosenEl = document.getElementsByClassName("activeBtn")[0]

    if (convertString(inputEl.value) == convertString(mapNames[chosenNum])) {
        resultEl.innerHTML = "Správne"
        resultEl.style.color = "green"
        // reset
        inputEl.value = ""
        chosenEl.classList.remove("activeBtn")
        // generate new
        generateNum()
    } else {
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

// hide list
mapList.style.opacity = 1
hideBtn.addEventListener("click", () => {
    if (mapList.style.opacity == 1) {
        mapList.style.opacity = 0
        hideBtn.innerHTML = "Show list"
    } else {
        mapList.style.opacity = 1
        hideBtn.innerHTML = "Hide list"
    }
})

// initialize
generateNum()
showMapList()