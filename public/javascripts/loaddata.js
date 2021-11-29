var myChart;
let object;
var barColors = ["red", "green","blue","orange","brown","purple", "cyan"];

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("escolher_genero").addEventListener("change", (event) => {teste(parseInt(event.target.value))});

  let httpRequest = new XMLHttpRequest(); // asynchronous request
  httpRequest.open("GET", "./data/result_engines_x_genre.json", true);
  httpRequest.send();
  httpRequest.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      // when the request has completed
      object = JSON.parse(this.response);
    }
  
    var newSelect = document.getElementById("escolher_genero");

    for(element in object) {
      var opt = document.createElement("option");
      opt.value = element;
      opt.innerHTML = object[element].genre; // whatever property it has

      // then append it to the select element
      newSelect.appendChild(opt);

      teste(0)
    }
  });

});

function teste(index) {
  if (myChart) {
    myChart.destroy()
  }
  
  myChart = new Chart("myChart", {
      type: "bar",
      data: {
        labels: object[index].engines.map(x => x.engine_name),
        datasets: [{
          backgroundColor: barColors,
          data: object[index].engines.map(x => x.tot )
        }]
      },
      options: {
          legend: {display: true},
          title: {
          display: true,
          text: object[index].genre
          }
      }
    });
}

function teste2(index) {
  let httpRequest = new XMLHttpRequest(); // asynchronous request
  httpRequest.open("GET", "./data/result_engines_x_genre.json", true);
  httpRequest.send();
  httpRequest.addEventListener("readystatechange", function() {
      if (this.readyState === this.DONE) {
          // when the request has completed
          object = JSON.parse(this.response);
          
          // object.forEach(genre => {
              
          // });

          if (myChart) {
            myChart.destroy()
          }
          
          myChart = new Chart("myChart", {
              type: "bar",
              data: {
                labels: object[index].engines.map(x => x.engine_name),
                datasets: [{
                  backgroundColor: barColors,
                  data: object[index].engines.map(x => x.tot )
                }]
              },
              options: {
                  legend: {display: true},
                  title: {
                  display: true,
                  text: object[index].genre
                  }
              }
            });
      }
  });
}

// new Chart("myChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {}
// });