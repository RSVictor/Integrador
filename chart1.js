var ctx = document.getElementById("lineChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Peças Pequenas",
        data: [
          2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300,
          2900,
        ],
        backgroundColor: "rgba(41, 155, 99, 1)",
        borderColor: "rgba(41, 155, 99, 1)",
        borderWidth: 1,
      },
      {
        label: "Peças Médias",
        data: [
          1500, 1700, 1800, 2200, 1600, 1700, 1900, 2100, 2000, 1800, 2200,
          2400,
        ],
        backgroundColor: "rgba(255, 0, 0, 1)",
        borderColor: "rgba(255, 0, 0, 1)",
        borderWidth: 1,
      },
      {
        label: "Peças Grandes",
        data: [1450, 1200, 1200, 1600, 1200, 1300, 1300, 1000, 1250, 1150, 800, 1000],
        backgroundColor: "rgba(54, 162, 235, 1)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
