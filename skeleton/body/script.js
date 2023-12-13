const mapNames = {
    1: "Skull",
    2: "Mandible",
    3: "Cervical vertebrae",
    4: "Thoracic vertebrae",
    5: "Lumbar vertebrae",
    6: "Pelvis",
    7: "Tacrum",
    8: "Coccyx",
    9: "Clavicle",
    10: "Scapula",
    11: "Sternum",
    12: "Ribs",
    13: "Humerus",
    14: "Radius",
    15: "Ulna",
    16: "Carpals",
    17: "Metacarpals",
    18: "Phalanges",
    19: "Femur",
    20: "Patella",
    21: "Tibia",
    22: "Fibula",
    23: "Calcaneus",
    24: "Tarsals",
    25: "Metatarsals",
    26: "Phalanges"
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