
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './clock.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function DigitalClock(datetime) {

    let dayName = "";
  
  switch (new Date().getDay()) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "";
  }
    
    let { day, month, year, hour, minute, seconds } = datetime;
    let ampm = null;
    if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";
    }
    else {
        ampm = "AM";
    }
    return (
        <>
            <div className="matrix-bg"></div>
            <div className="container-fluid clock-container d-flex justify-content-center align-items-center">
                <div className="text-center glow-box">
                    <div id="clock" className="clock">{hour}:{minute}:{seconds} {ampm}</div>
                    <div id="date" className="date mt-3">{dayName} {day}-{month}-{year} </div>
                </div>
            </div>
        </>
    )
}

function UpdateDateTime()
{
  let d = new Date(); 
let datetime = {
    day: d.getDate(),
    month: d.getMonth() + 1,
    year: d.getFullYear(),
    hour: d.getHours(),
    minute: d.getMinutes(),
    seconds: d.getSeconds()
}
root.render(DigitalClock(datetime));
}
setInterval(UpdateDateTime,1000);
