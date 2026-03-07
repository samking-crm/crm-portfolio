const chart = document.getElementById("salesChart");

if(chart){

new Chart(chart, {

type: "bar",

data: {

labels: ["Jan","Feb","Mar","Apr"],

datasets: [{

label: "Sales",

data: [500,900,700,1200]

}]

}

});

}
