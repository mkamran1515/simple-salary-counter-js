let setTime = document.getElementById("set_time");
let totalWork = document.getElementById("total_work");
let msgCounter = document.getElementById("msg");
// incoms
let yearly_inc = document.getElementById("yearly_inc");
let monthly_inc = document.getElementById("monthly_inc");
let daily_inc = document.getElementById("daily_inc");
let hourly_inc = document.getElementById("hourly_inc");
let weekly_inc = document.getElementById("weekly_inc");
let minutes_inc = document.getElementById("minutes_inc");


let checkNum = () => {
    let settime_val = setTime.value;
    let total_work = totalWork.value;

    if(setTime.value ==0 || total_work.length == 0) {
        yearly_inc.value = "";
        monthly_inc.value = "";
        weekly_inc.value = "";
        daily_inc.value = "";
        hourly_inc.value = "";
        minutes_inc.value = "";
        msgCounter.innerHTML = "some fields are missing!";
        msgCounter.style.display="block";
    }
    else {
        msgCounter.style.display="none";
        let minutes = parseFloat(settime_val/20).toFixed(3);
        let hourly = settime_val;
        let daily  = parseFloat(8 * settime_val).toFixed(3);
        let weekly = parseFloat(40 * settime_val).toFixed(3);
        let monthly = parseFloat(settime_val * total_work).toFixed(3);
        let yearl_salary = parseFloat(monthly * 12).toFixed(3); 
        yearly_inc.value = yearl_salary;
        monthly_inc.value = monthly;
        weekly_inc.value = weekly;
        daily_inc.value = daily;
        hourly_inc.value = hourly;
        minutes_inc.value = minutes;
    }
    
}