var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

// pure javascript
let object;
let httpRequest = new XMLHttpRequest(); // asynchronous request
httpRequest.open("GET", "./data/result_engines_x_genre.json", true);
httpRequest.send();
httpRequest.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      	// when the request has completed
        object = JSON.parse(this.response);
        
        // object.forEach(genre => {
            
        // });
        
        new Chart("myChart", {
            type: "bar",
            data: {
              labels: object[0].engines.map(x => x.engine_name),
              datasets: [{
                backgroundColor: barColors,
                data: object[0].engines.map(x => x.tot )
              }]
            },
            options: {
                legend: {display: true},
                title: {
                display: true,
                text: object[0].genre
                }
            }
          });
    }
});

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