const mapNames = {
    1: "Frontal",
    2: "Nasal",
    3: "Sphenoid",
    4: "Lacrimal",
    5: "Zygomatic",
    6: "Vomer",
    7: "Maxilla",
    8: "Coronal suture",
    9: "Parietal",
    10: "Supraorbital foramen",
    11: "Temporal",
    12: "Infraorbital foramen",
    13: "Mandible",
    14: "Mental foramen",
    15: "Coronal suture",
    16: "Frontal",
    17: "Nasal",
    18: "Sphenoid",
    19: "Maxilla",
    20: "Mandible",
    21: "Parietal",
    22: "Squamous suture",
    23: "Lamboid suture",
    24: "Occipital",
    25: "Temporal",
    26: "Mastoid process",
    27: "Zygomatic"
}

// declare elements
const resultEl = document.getElementById("result")
const mapBtns = document.getElementsByClassName("mapBtn")

for(const btn of mapBtns) {
    btn.addEventListener("click", () => {
        const btnId = btn.id.substring(1)
        resultEl.innerText = mapNames[btnId]
    })
}