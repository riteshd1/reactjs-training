const dateObj = new Date();
// get current date and time
console.log(Date.now());

//get time zone wise date
console.log(new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));

const changeTime=()=>{
// for hour
const d = new Date();
let hour = d.getHours();
document.querySelector("#h").innerHTML = hour;

// for minutes
let minutes = d.getMinutes();
document.querySelector("#m").innerHTML = minutes;

// for seconds
let seconds = d.getSeconds();
document.querySelector("#s").innerHTML = seconds;

//AM PM
let timeStr = d.toLocaleString('en-US', { hour: 'numeric', hour12: true }).split(" ");
document.querySelector("#ap").innerHTML = timeStr[timeStr.length-1];

}
setInterval(changeTime,1000);
