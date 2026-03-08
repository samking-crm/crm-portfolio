/* ================================
   Email Gate Redirect
   Ensures visitor must enter email first
================================ */
if(!localStorage.getItem("visitorEmail")){
    if(window.location.pathname.indexOf("index.html") === -1){
        window.location.href="index.html";
    }
}

/* ================================
   Capture Email on Form Submit
================================ */
const form = document.querySelector('form');
if(form){
    form.addEventListener('submit', function(e){
        const emailInput = document.querySelector('input[name="email"]');
        if(emailInput && emailInput.value){
            localStorage.setItem("visitorEmail", emailInput.value);
        }
    });
}

/* ================================
   Dashboard Sales Chart
================================ */
const salesChart = document.getElementById("salesChart");
if(salesChart){
    new Chart(salesChart, {
        type: "bar",
        data: {
            labels: ["Jan","Feb","Mar","Apr"],
            datasets: [{
                label: "Sales",
                data: [500,900,700,1200],
                backgroundColor: "rgba(37,99,235,0.7)"
            }]
        },
        options: {
            responsive:true,
            plugins:{legend:{display:true}},
        }
    });
}

/* ================================
   Analytics Charts
================================ */
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
        },
        options:{
            responsive:true,
            plugins:{legend:{display:true}},
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
        },
        options:{
            responsive:true,
            plugins:{legend:{display:true}},
        }
    });
              }
