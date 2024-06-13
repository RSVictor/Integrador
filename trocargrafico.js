document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const lineChart = document.getElementById("lineChart");
    const lineChart2 = document.getElementById("lineChart2");
    const title1 = document.querySelector("#lineChart").closest(".chart").querySelector("h2");
    const title2 = document.querySelector("#lineChart2").closest(".chart").querySelector("h2");
    
    let currentChart = 1;

    toggleButton.addEventListener("click", function() {
        if (currentChart === 1) {
            lineChart.style.display = "none";
            lineChart2.style.display = "block";
            title1.innerText = "Produção Anual (Últimos 12 meses)";
            title2.innerText = "Produção Diária (Últimos 15 Dias)";
            currentChart = 2;
        } else {
            lineChart.style.display = "block";
            lineChart2.style.display = "none";
            title1.innerText = "Produção Diária (Últimos 15 Dias)";
            title2.innerText = "Produção Anual (Últimos 12 meses)";
            currentChart = 1;
        }
    });
});
