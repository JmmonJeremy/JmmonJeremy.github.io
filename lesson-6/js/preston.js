// *** Current Year Code
// set variable to the new Date() class to make an object
let date = new Date();
// set variable to the getFullYear() child function
let year = date.getFullYear();
// replace the variable with the year through variable
document.getElementById("current_year").innerHTML = year;
// Use for date written out
document.getElementById("cur_year").innerText = year;
// Last Update JS Code
// Set variable to the document.lastModified function result
let modified = document.lastModified;
// replace variable with the results from function call & replace modified in document
document.getElementById("modified").innerText = "Last Updated: " + modified;
// End *** Current Year Code ****************************************************************************************** */

// *** Function to do Hamburger Menu 
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive"); 
    document.getElementsByClassName("menu_a")[0].classList.toggle("responsive");     
}
// End *** Function to do Hamburger Menu ****************************************************************************** */

// *** Current Weekday, Day of the Month, & Month Code
// Get the Weekday
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let d = new Date();
let dayName = days[d.getDay()];
document.getElementById("today").innerText = dayName;
// Get the day of the Month
let t_date = new Date();
let day_of_m = t_date.getDate();
document.getElementById("m_day").innerHTML = day_of_m;
// Get the Month written out
let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let m = new Date();
let mName = month[m.getMonth()];
document.getElementById("cur_month").innerText = mName;
// End *** Current Weekday, Day of the Month, & Month Code ************************************************************* */

// *** Banner Display on Fridays Code
// Use variable "dayName" from newDate.getday() being converted to day written out above for if statement
if (dayName === "Friday") {
    //changes display to block from none in css
    document.getElementById("pancakes").style.display = "block";
}
// End *** Banner Display on Fridays Code ****************************************************************************** */

// *** API JSON Weather Request for Weather Update
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Preston,5604473&appid=d8504fb6db3692f9637d82ee139508e9&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const weatherSummary = jsObject;
    let tempSummary = weatherSummary.main.temp;
    let windSpeedSummary = weatherSummary.wind.speed;
    let windChillSummary;
    if (tempSummary <= 50.0 && windSpeedSummary >= 3.0) {
        windChillSummary = 35.74 + 0.6215*tempSummary - 35.75*windSpeedSummary**0.16 + 0.4275*tempSummary*windSpeedSummary**0.16; 
        document.querySelector("#wind_chill").textContent = Math.round(windChillSummary);   
    }else {
        document.querySelector("#NA").textContent = "N/A";   
    }
    document.querySelector("#condition").innerHTML = weatherSummary.weather[0].main;
    document.querySelector("#temp").textContent = Math.round(weatherSummary.main.temp);
    document.getElementById("wind_speed").innerText = Math.round(weatherSummary.wind.speed);
    document.querySelector("#humidity").innerHTML = Math.round(weatherSummary.main.humidity);
});
// End *** API JSON Weather Request for Weather Update ***************************************************************** */

// *** Code for Five Day Forecast
let forecastDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=Preston,5604473&appid=d8504fb6db3692f9637d82ee139508e9&units=imperial"
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
    //console.table(jsObject);
      let dayCnt = 0;
      const forecasts = jsObject.list;
      // Filter list down to the 5 day forecast
      let myForecast = forecasts.filter(forecast => {
            return forecast.dt_txt.includes("18:00:00")
        })
        //console.table(myForecast)
        // Loop through and identify the day to put forecast & icon in
        myForecast.forEach(day => {
        let fD = new Date(day.dt_txt)
        let forecastDay = forecastDays[fD.getDay()]; 
        //console.log(forecastDay);
        dayCnt++;
        document.querySelector("#forecast_day" + dayCnt).innerHTML = forecastDay; 
        document.querySelector("#day_t" + dayCnt).textContent = day.main.temp.toFixed(0);
        let day_ti = document.querySelector("#day_ti" + dayCnt);           
        day_ti.setAttribute("src", "https://openweathermap.org/img/w/" + day.weather[0].icon + '.png');
        day_ti.setAttribute("alt", day.description);     
    })         
})
// End *** Code for Five Day Forecast ********************************************************************************** */

// *** Get the Town Upcoming Events Using fetch 
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        let cities = jsonObject["towns"];
          // Filter list down to the 5 day forecast
          let townInfo = cities.filter(city => {
            return city.name.includes("Preston")                
          });          
          console.table(townInfo);
          let eventsContainer = document.querySelector("#eventsContainer");
          let eventList = townInfo[0].events;
          console.log(eventList);
          eventList.forEach(event => {
            let townEvent = document.createElement("p");
            townEvent.innerHTML = event;
            townEvent.className = "townEvent";
            eventsContainer.appendChild(townEvent);
         });
      });
// End *** Get the Town Upcoming Events Using fetch********************************************************************* */
     

   
 
 