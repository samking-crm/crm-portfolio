if (localStorage.getItem("submitted") !== "true") {
    if (window.location.pathname !== "/index.html") {
        window.location.href = "index.html";
    }
}

// Lead Chart
const leadChart = document.getElementById("leadChart");
if(leadChart){
new Chart(leadChart,{
type:"line",
data:{
labels:["Week1","Week2","Week3","Week4"],
datasets:[{
label:"New Leads",
data:[12,19,8,25],
borderColor:"rgba(37,99,235,1)",
backgroundColor:"rgba(37,99,235,0.2)"
}]
}
});
}

// Revenue Chart
const revenueChart = document.getElementById("revenueChart");
if(revenueChart){
new Chart(revenueChart,{
type:"bar",
data:{
labels:["Jan","Feb","Mar","Apr"],
datasets:[{
label:"Revenue",
data:[5000,9000,7000,12000],
backgroundColor:"rgba(16,185,129,0.7)"
}]
}
});
}

// Sales Chart (added to match dashboard.html canvas ID)
const salesChart = document.getElementById("salesChart");
if (salesChart) {
    new Chart(salesChart, {
        type: "line",
        data: {
            labels: ["Week1", "Week2", "Week3", "Week4"],
            datasets: [{
                label: "Sales Data",
                data: [10, 20, 15, 30],
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)"
            }]
        }
    });
}
