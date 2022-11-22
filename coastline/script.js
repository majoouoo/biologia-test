const mapNames = {
    1: "Kara Sea",
    2: "Yamal Peninsula",
    3: "Taymyr Peninsula",
    4: "Laptev Sea",
    5: "East Siberian Sea",
    6: "Chukchi Sea",
    7: "Chukchi Peninsula (Chukotka)",
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

const nameEl = document.getElementById("nameHead")
const mapBtn = document.getElementsByClassName("mapBtn")
const resultEl = document.getElementById("result")
const clickedName = document.getElementById("clickedName")

const generateNum = () => {
    const randomNum = Math.ceil(Math.random() * 44)
    return randomNum
}

localStorage.setItem("randomNum", generateNum())
nameEl.innerHTML = mapNames[localStorage.getItem("randomNum")]

for (let i = 0; i < mapBtn.length; i++) {
    mapBtn[i].addEventListener("click", () => {
        clickedName.innerHTML = mapNames[mapBtn[i].id.substring(1)]
        clickedName.style.top = mapBtn[i].getBoundingClientRect().top + 10 + "px"
        clickedName.style.left = mapBtn[i].getBoundingClientRect().left + "px"

        if (mapBtn[i].id.substring(1) == localStorage.getItem("randomNum")) {
            resultEl.innerHTML = "Spravne"
            resultEl.style.color = "green"
            mapBtn[i].style.background = "green"
            setTimeout(() => {
                mapBtn[i].style.background = ""
            }, 1000)
            localStorage.setItem("randomNum", generateNum())
            nameEl.innerHTML = mapNames[localStorage.getItem("randomNum")]
        } else {
            resultEl.innerHTML = "Zle"
            resultEl.style.color = "red"
            mapBtn[i].style.background = "red"
            setTimeout(() => {
                mapBtn[i].style.background = ""
            }, 1000)
        }
    })
}