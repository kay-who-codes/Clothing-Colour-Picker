document.addEventListener("DOMContentLoaded", function () {
    const selections = {
        jacket: document.getElementById("jacket"),
        top: document.getElementById("top"),
        bottoms: document.getElementById("bottoms"),
        shoes: document.getElementById("shoes"),
    };

    const display = {
        jacket: document.getElementById("jacket-display"),
        top: document.getElementById("top-display"),
        bottoms: document.getElementById("bottoms-display"),
        shoes: document.getElementById("shoes-display"),
    };

    const selectedColoursList = document.getElementById("selected-colours");

    function updateColours() {
        let updatedList = "";
        for (let key in selections) {
            let selectedOption = selections[key].options[selections[key].selectedIndex];
            let colourName = selectedOption.textContent;
            let colourValue = selections[key].value;
            display[key].style.backgroundColor = colourValue;
            updatedList += `<li>${colourName} ${key.charAt(0).toUpperCase() + key.slice(1)}</li>`;
        }
        selectedColoursList.innerHTML = updatedList;
    }

    for (let key in selections) {
        selections[key].addEventListener("change", updateColours);
    }
});
