var ctx = document.getElementById("lineChart2").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "1",      
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",   
    ],
    datasets: [
      {
        label: "Peças Pequenas",
        data: [
          90,96,100,98,90,110,80,95,105,99,120,70,88,104,105,
        ],
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
      },
      {
        label: "Peças Médias",
        data: [
         80,60,90,100,95,80,65,100,130,98,72,60,80,40,50,
        ],
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
      },
      {
        label: "Peças Grandes",
        data: [3,4,2,3,6,3,1,4,2,1,3,5,3,4,6,],
        backgroundColor: 'rgb(255, 205, 86)',
        borderColor: 'rgb(255, 205, 86)',
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
