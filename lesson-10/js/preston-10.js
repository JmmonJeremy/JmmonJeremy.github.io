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

// *** Current 5 Day Forecast Code + Coordinate Weather Summary to the Day of the Forecast
let todays_temp;
// #1 - If it is Sunday display this
if (dayName === "Sunday") {
    //changes display to block from none in css
    document.querySelector("#sunday").style.display = "block";
    document.querySelector("#monday").style.display = "block";
    document.querySelector("#tuesday").style.display = "block";
    document.querySelector("#wednesday").style.display = "block";  
    document.querySelector("#thursday").style.display = "block";
    //sets "Currently" to days Temp setting
    todays_temp= document.getElementById("sun_t").innerText;
    document.querySelector("#temp").textContent = todays_temp;
    document.getElementById("condition").innerHTML = "Sunny";
}
// #2 - If it is Monday display this
if (dayName === "Monday") {
    //changes display to block from none in css   
    document.querySelector("#monday").style.display = "block";
    document.querySelector("#tuesday").style.display = "block";
    document.querySelector("#wednesday").style.display = "block";  
    document.querySelector("#thursday").style.display = "block";
    document.querySelector("#friday").style.display = "block";
    //sets "Currently" to days Temp setting
    todays_temp= document.getElementById("mon_t").innerText;
    document.querySelector("#temp").textContent = todays_temp;
    document.getElementById("condition").innerHTML = "Cloudy";
}
// #3 - If it is Tuesday display this
if (dayName === "Tuesday") {
    //changes display to block from none in css   
    document.querySelector("#tuesday").style.display = "block";  
    document.querySelector("#wednesday").style.display = "block";  
    document.querySelector("#thursday").style.display = "block";
    document.querySelector("#friday").style.display = "block";
    document.querySelector("#saturday").style.display = "block";
    //sets "Currently" to days Temp setting
    todays_temp= document.getElementById("tue_t").innerText;
    document.querySelector("#temp").textContent = todays_temp;
    document.getElementById("condition").innerHTML = "Drizzling";
}
// #4 - If it is Wednesday display this
if (dayName === "Wednesday") {
    //changes display to block from none in css
    document.querySelector("#wednesday").style.display = "block";
    document.querySelector("#thursday").style.display = "block";
    document.querySelector("#friday").style.display = "block";
    document.querySelector("#saturday").style.display = "block";  
    document.querySelector("#sunday").style.display = "block";
    document.querySelector("#sunday").style.order = 2;
    //sets "Currently" to days Temp setting
    todays_temp= document.getElementById("wed_t").innerText;
    document.querySelector("#temp").textContent = todays_temp; 
    document.getElementById("condition").innerHTML = "Sprinkling";
}
// #5 - If it is Thursday display this
if (dayName === "Thursday") {
    //changes display to block from none in css   
    document.querySelector("#thursday").style.display = "block";
    document.querySelector("#friday").style.display = "block";
    document.querySelector("#saturday").style.display = "block";
    document.querySelector("#sunday").style.display = "block";
    document.querySelector("#sunday").style.order = 2;
    document.querySelector("#monday").style.display = "block";
    document.querySelector("#monday").style.order = 2;
    //sets "Currently" to days Temp setting
    todays_temp= document.getElementById("thu_t").innerText;
    document.querySelector("#temp").textContent = todays_temp;
    document.getElementById("condition").innerHTML = "Showers";
}
// #6 - If it is Friday display this
if (dayName === "Friday") {
    //changes display to block from none in css   
    document.querySelector("#friday").style.display = "block";
    document.querySelector("#saturday").style.display = "block";
    document.querySelector("#sunday").style.display = "block";
    document.querySelector("#sunday").style.order = 2;
    document.querySelector("#monday").style.display = "block";
    document.querySelector("#monday").style.order = 2;
    document.querySelector("#tuesday").style.display = "block";
    document.querySelector("#tuesday").style.order = 2;
    //sets "Currently" to days Temp setting
    todays_temp= document.getElementById("fri_t").innerText;
    document.querySelector("#temp").textContent = todays_temp;
    document.getElementById("condition").innerHTML = "Downpour";
}
// #7- If it is Saturday display this
if (dayName === "Saturday") {
    //changes display to block from none in css   
    document.querySelector("#saturday").style.display = "block";
    document.querySelector("#sunday").style.display = "block";
    document.querySelector("#sunday").style.order = 2;
    document.querySelector("#monday").style.display = "block";
    document.querySelector("#monday").style.order = 2;
    document.querySelector("#tuesday").style.display = "block";
    document.querySelector("#tuesday").style.order = 2;
    document.querySelector("#wednesday").style.display = "block";
    document.querySelector("#wednesday").style.order = 2;
    //sets "Currently" to days Temp setting
    todays_temp= document.getElementById("fri_t").innerText;
    document.querySelector("#temp").textContent = todays_temp;
    document.getElementById("condition").innerHTML = "Overcast";
}
// End *** Current 5 Day Forecast Code ********************************************************************************* */

// *** Wind Chill Code (wind chill = 35.74 + 0.6215t - 35.75s^0.16 + 0.4275ts^0.16)
let temp = parseFloat(document.querySelector("#temp").innerHTML);
let wind_speed = parseFloat(document.getElementById("wind_speed").innerText);
let wind_chill = "NA";
if (temp <= 50.0 && wind_speed >= 3) {
    wind_chill = 35.74 + 0.6215*temp - 35.75*wind_speed**0.16 + 0.4275*temp*wind_speed**0.16; 
    document.querySelector("#wind_chill").textContent = Math.round(wind_chill);   
}else {
    document.querySelector("#NA").textContent = "N/A";   
}

// End *** Wind Chill Code ********************************************************************************************* */

 // *** API JSON Weather Request for Weather Update
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Preston,5604473&appid=d8504fb6db3692f9637d82ee139508e9&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const weatherSummary = jsObject;
    document.querySelector("#condition").innerHTML = weatherSummary.weather[0].main;
    document.querySelector("#temp").textContent = weatherSummary.main.temp;
    document.getElementById("wind_speed").innerText = weatherSummary.wind.speed;
    document.querySelector("#humidity").innerHTML = weatherSummary.main.humidity;
});

// *** Code for Five Day Forecast
let forecastDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=Preston,5604473&appid=d8504fb6db3692f9637d82ee139508e9&units=imperial"
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.table(jsObject);
      const forecasts = jsObject.list;
      // Filter list down to the 5 day forecast
      let myForecast = forecasts.filter(forecast => {
            return forecast.dt_txt.includes("18:00:00")
        })
        console.table(myForecast)
        // Loop through and identify the day to put forecast & icon in
        myForecast.forEach(day => {
        let fD = new Date(day.dt_txt)
        let forecastDay = forecastDays[fD.getDay()]; 
        console.log(forecastDay);
        if (forecastDay == "Sunday") {
            document.querySelector("#sun_t").textContent = day.main.temp.toFixed(0);
            let sun_ti = document.querySelector("#sun_ti");           
            sun_ti.setAttribute("src", "https://openweathermap.org/img/w/" + day.weather[0].icon + '.png');
            sun_ti.setAttribute("alt", day.description);          
        } else if (forecastDay == "Monday") {
            document.querySelector("#mon_t").textContent = day.main.temp.toFixed(0);
            let sun_ti = document.querySelector("#mon_ti");           
            mon_ti.setAttribute("src", "https://openweathermap.org/img/w/" + day.weather[0].icon + '.png');
            mon_ti.setAttribute("alt", day.description); 
        } else if (forecastDay == "Tuesday") {
            document.querySelector("#tue_t").textContent = day.main.temp.toFixed(0);
            let tue_ti = document.querySelector("#tue_ti");           
            tue_ti.setAttribute("src", "https://openweathermap.org/img/w/" + day.weather[0].icon + '.png');
            tue_ti.setAttribute("alt", day.description); 
        } else if (forecastDay == "Wednesday") {
            document.querySelector("#wed_t").textContent = day.main.temp.toFixed(0);
            let wed_ti = document.querySelector("#wed_ti");           
            wed_ti.setAttribute("src", "https://openweathermap.org/img/w/" + day.weather[0].icon + '.png');
            wed_ti.setAttribute("alt", day.description); 
        } else if (forecastDay == "Thursday") {
            document.querySelector("#thu_t").textContent = day.main.temp.toFixed(0);
            let thu_ti = document.querySelector("#thu_ti");           
            thu_ti.setAttribute("src", "https://openweathermap.org/img/w/" + day.weather[0].icon + '.png');
            thu_ti.setAttribute("alt", day.description); 
        } else if (forecastDay == "Friday") {
            document.querySelector("#fri_t").textContent = day.main.temp.toFixed(0);
            let fri_ti = document.querySelector("#fri_ti");           
            fri_ti.setAttribute("src", "https://openweathermap.org/img/w/" + day.weather[0].icon + '.png');
            fri_ti.setAttribute("alt", day.description); 
        } else if (forecastDay == "Saturday") {
            document.querySelector("#sat_t").textContent = day.main.temp.toFixed(0);
            let sat_ti = document.querySelector("#sat_ti");           
            sat_ti.setAttribute("src", "https://openweathermap.org/img/w/" + day.weather[0].icon + '.png');
            sat_ti.setAttribute("alt", day.description); 
        }
    })         
})
      
     

   
 
 