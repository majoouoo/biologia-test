const mapNames = {
    1: "Gulf of Guinea",
    2: "Gulf of Sidra",
    3: "Gulf of Gabés",
    4: "Gulf of Aden",
    5: "Gulf of Aqaba",
    6: "Bab el-Mandéb",
    7: "Suez Canal",
    8: "Mozambique Channel",
    9: "Strait of Gibraltar",
    10: "Horn of Africa",
    11: "Madagascar",
    12: "Cape Verde",
    13: "Canary Islands",
    14: "Comoros",
    15: "Seychelles",
    16: "Zanzibar",
    17: "Pemba",
    18: "Socotra",
    19: "Bioko",
    20: "Reunion",
    21: "Mauricius",
    22: "Madeira",
    23: "Cap Vert",
    24: "Cape Blanc",
    25: "Cape Hafun",
    26: "Cape Agulhas"
}

// declare elements
const inputEl = document.getElementById("input")
const answerBtn = document.getElementById("answerBtn")
const checkBtn = document.getElementById("checkBtn")
const resultEl = document.getElementById("result")
const mapList = document.getElementById("mapList")
const mapBtns = document.getElementsByClassName("mapBtn")
const hideBtn = document.getElementById("hideBtn")
const revealMapBtn = document.getElementById("revealMapBtn")

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
        resultEl.innerHTML = "Correct"
        resultEl.style.color = "green"
        inputEl.style.boxShadow = "0px 0px 20px -2px green"
        inputEl.style.border = "2px solid green"
        // reset
        inputEl.value = ""
        chosenEl.classList.remove("activeBtn")
        // generate new
        generateNum()
    } else {
        resultEl.innerHTML = "Incorrect"
        resultEl.style.color = "red"
        inputEl.style.boxShadow = "0px 0px 20px -2px red"
        inputEl.style.border = "2px solid red"
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
    inputEl.style.boxShadow = ""
    inputEl.style.border = "2px solid black"
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
mapList.style.display = "grid"
hideBtn.addEventListener("click", () => {
    // if (mapList.style.display == "grid") {
    //     mapList.style.display = "none"
    //     hideBtn.innerHTML = "Show list"
    // } else {
    //     mapList.style.display = "grid"
    //     hideBtn.innerHTML = "Hide list"
    // }
    scrollTo(0,0)
})

// reveal map
revealMapBtn.addEventListener("click", () => {
    if (revealMapBtn.innerHTML == "Show all") {
        for (btn of mapBtns) {btn.classList.add("visibleMapBtn")}
        revealMapBtn.innerHTML = "Hide all"
    } else {
        for (btn of mapBtns) {btn.classList.remove("visibleMapBtn")}
        revealMapBtn.innerHTML = "Show all"
    }
})

// initialize
generateNum()
showMapList()

document.addEventListener("scroll", () => resultEl.innerText = "Scroll")