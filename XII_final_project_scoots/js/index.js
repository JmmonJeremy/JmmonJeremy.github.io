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
// End *** Current Weekday, Day of the Month, & Month Code ************************************************************ */

// Weather Forecast for #1 Playa del Carmen-Cozumel Ferry dock in el Centro de Cozumel or 
//#2 the Terminal Puerta Maya further south along the coast which caters to the cruise lines and patrons
// *** API JSON Weather Request for AccuWeather of Current Weather
/*const apiURL = "http://dataservice.accuweather.com/currentconditions/v1/240389?apikey=jtO8dA2GjI9isg11OxGQCUI6Yw2eZTpc&en-us&details=true";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const weatherSummary = jsObject[0];
    let wIcon = "https://developer.accuweather.com/sites/default/files/" + weatherSummary.WeatherIcon + "-s.png";    
    let wDescription = weatherSummary.WeatherText;
    let tempSummary = Math.round(weatherSummary.Temperature.Imperial.Value) + " \u00B0" + weatherSummary.Temperature.Imperial.Unit;
    let humidity = Math.round(weatherSummary.RelativeHumidity) + "%";    
    let windSpeedSummary = Math.round(weatherSummary.Wind.Speed.Imperial.Value) + " mph";
    let feelsLike =  Math.round(weatherSummary.RealFeelTemperature.Imperial.Value) + " \u00B0" + weatherSummary.RealFeelTemperature.Imperial.Unit + " " + weatherSummary.RealFeelTemperature.Imperial.Phrase;
    console.log(feelsLike);
    document.querySelector("#current_w_icon").src = wIcon;
    document.querySelector("#current_w_icon").alt = wDescription;
    document.querySelector("#condition").innerHTML = wDescription;
    document.querySelector("#temp").innerHTML = tempSummary;
    document.querySelector("#humidity").textContent = humidity;
    document.getElementById("wind_speed").innerText = windSpeedSummary;
    document.querySelector("#like").innerHTML = feelsLike;  
});
// End *** API JSON Weather Request for Weather Update ***************************************************************** */

//5 DAY FORECAST REQUEST FOR ACCUWEATHER: *** Code for Five Day Forecast
/*let forecastDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const fcAPIurl = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/240389?apikey=jtO8dA2GjI9isg11OxGQCUI6Yw2eZTpc&language=en-us&details=true&metric=false";
fetch(fcAPIurl)
  .then((response) => response.json())
  .then((jsData) => {
    console.log(jsData);
 
      let dayCnt = 0;
      const forecasts = jsData.Headline.DailyForecasts;
      // Filter list down to the 5 day forecast
      //let myForecast = 
      console.table(forecasts)
        // Loop through and identify the day to put forecast & icon in
      /*  forecasts.forEach(day => {
        let fD = new Date(day.dt_txt)
        let forecastDay = forecastDays[fD.getDay()]; 
        //console.log(forecastDay);
        dayCnt++;
        document.querySelector("#forecast_day" + dayCnt).innerHTML = forecastDay; 
        document.querySelector("#day_t" + dayCnt).textContent = day.main.temp.toFixed(0);
        let day_ti = document.querySelector("#day_ti" + dayCnt);           
        day_ti.setAttribute("src", "https://openweathermap.org/img/w/" + day.weather[0].icon + '.png');
        day_ti.setAttribute("alt", day.description);     
    })   */      
/*})*/

// End *** Code for Five Day Forecast ********************************************************************************** */

//_______________________________________________________________________________________________________________________________________________
//************************************************************************************************************************************************
//   CODE USING OPEN WEATHER MAP TO GET THE WEATHER UPDATE AND FORECAST
//________________________________________________________________________________________________________________________________________________

// Weather Forecast for #1 Playa del Carmen-Cozumel Ferry dock in el Centro de Cozumel or 
//#2 the Terminal Puerta Maya further south along the coast which caters to the cruise lines and patrons
// *** API JSON Weather Request for AccuWeather of Current Weather
const apiURL2 = "http://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=c8e65c67b29a4c9cbeb5e066024d1050&units=imperial"
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject2) => {
    console.log(jsObject2);
    const wSum = jsObject2; 
    let wIcon2 = "https://openweathermap.org/img/w/" + wSum.weather[0].icon + ".png"
      
    let wDescr = wSum.weather[0].description;
    let tempSum = Math.round( wSum.main.temp) + " \u00B0F";
    let humid = Math.round( wSum.main.humidity) + "%";    
    let windSpdSum = Math.round( wSum.wind.speed) + " mph";
    let flsLke =  Math.round( wSum.main.feels_like) + " \u00B0F";
    console.log(flsLke);
    document.querySelector("#current_w_icon").src = wIcon2;
    document.querySelector("#current_w_icon").alt = wDescr;
    document.querySelector("#condition").innerHTML = wDescr.toUpperCase();
    document.querySelector("#temp").innerHTML = tempSum;
    document.querySelector("#humidity").textContent = humid;
    document.getElementById("wind_speed").innerText = windSpdSum;
    document.querySelector("#like").innerHTML = flsLke;  
});
// End *** API JSON Weather Request for Weather Update ***************************************************************** */

// Code for 5 Day Forecast at Noon Using OpenWeatherMap  ****************************************
let forecastDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const fcAPIurl = "http://api.openweathermap.org/data/2.5/forecast?q=Cozumel&appid=c8e65c67b29a4c9cbeb5e066024d1050&units=imperial"
fetch(fcAPIurl)
  .then((response) => response.json())
  .then((jsData) => {
    //console.log(jsData);
 
      
      let dayCnt = 0;
      const forecasts = jsData.list;
      // Filter list down to the 5 day forecast
      let myForecast = forecasts.filter(forecast => {
        return forecast.dt_txt.includes("12:00:00")
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