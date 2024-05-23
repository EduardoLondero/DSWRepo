import Sportentity from './sport.entity.js';

// Array para almacenar los deportes
const sportsCollection = [];

document.getElementById("createSport").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("sportName").value;
    const schedule = document.getElementById("sportSchedule").value;
    const price = document.getElementById("sportPrice").value;

    const deporte = new Sportentity(name, schedule, price);

    // Agregar el nuevo deporte a la colección
    sportsCollection.push(deporte);

    // Mostrar la colección actualizada de deportes
    displaySportsCollection();
});

function displaySportsCollection() {
    const infoDiv = document.getElementById("infoRegistrada");
    infoDiv.innerHTML = "";

    sportsCollection.forEach((sport, index) => {
        const sportInfo = document.createElement("div");
        sportInfo.innerHTML = `<h3>Deporte ${index + 1}</h3>${sport.showInfoSport()}`;
        infoDiv.appendChild(sportInfo);
    });
}