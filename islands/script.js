const mapNames = {
    1: "Severnaya Zemlya",
    2: "New Siberian Islands",
    3: "Wrangel Island",
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
    21: "Sri Lanka (Ceylon)",
    22: "Maldives",
    23: "Lakshadweep",
    24: "Cyprus",
    25: "Hainan",
    26: "Borneo"
}

const nameEl = document.getElementById("nameHead")
const mapBtn = document.getElementsByClassName("mapBtn")
const resultEl = document.getElementById("result")
const clickedName = document.getElementById("clickedName")

const generateNum = () => {
    const randomNum = Math.ceil(Math.random() * 26)
    return randomNum
}

localStorage.setItem("randomNum", generateNum())
nameEl.innerHTML = mapNames[localStorage.getItem("randomNum")]

for (let i = 0; i < mapBtn.length; i++) {
    mapBtn[i].addEventListener("click", () => {
        clickedName.innerHTML = mapNames[mapBtn[i].id.substring(1)]
        clickedName.style.top = mapBtn[i].getBoundingClientRect().top + 10 + "px"
        clickedName.style.left = mapBtn[i].getBoundingClientRect().left + "px"
        setTimeout(() => {
            clickedName.innerHTML = " "
        },  1500)

        if (mapBtn[i].id.substring(1) == localStorage.getItem("randomNum")) {
            resultEl.innerHTML = "Správne"
            resultEl.style.color = "green"
            mapBtn[i].style.background = "green"
            setTimeout(() => {
                mapBtn[i].style.background = ""
            },  1500)
            localStorage.setItem("randomNum", generateNum())
            nameEl.innerHTML = mapNames[localStorage.getItem("randomNum")]
        } else {
            resultEl.innerHTML = "Zle"
            resultEl.style.color = "red"
            mapBtn[i].style.background = "red"
            setTimeout(() => {
                mapBtn[i].style.background = ""
            },  1500)
        }
    })
}
