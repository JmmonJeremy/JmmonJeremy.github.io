// *** Current Year Code
// set variable to the new Date() class to make an object
let date = new Date();
// set variable to the getFullYear() child function
let year = date.getFullYear();
// revehicle the variable with the year through variable
document.getElementById("current_year").innerHTML = year;
// Use for date written out
document.getElementById("cur_year").innerText = year;
// Last Update JS Code
// Set variable to the document.lastModified function result
let modified = document.lastModified;
// revehicle variable with the results from function call & revehicle modified in document
document.getElementById("modified").innerText = "Last Updated: " + modified;
// End *** Current Year Code ****************************************************************************************** */

// *** Code to keep the Nav Bar at the top of the screen
/*let scrollpos = window.scrollY
const header = document.querySelector(".motto")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("fix")
const remove_class_on_scroll = () => header.classList.remove("fix")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

  console.log(scrollpos)
})*/


/*const navLoc = Math.round(document.querySelector(".floating_nav_bar").getBoundingClientRect().top);


window.addEventListener("scroll", () => {
  //const windowTop = document.querySelector("#header_content").offsetTop - document.body.scrollTop;
 // console.log(navLoc);
  let amtScrolled = document.body.clientHeight - scrollY;
  console.log(amtScrolled)
  console.log(navLoc - amtScrolled)
  if (navLoc - amtScrolled == 0) {
    
    console.log(document.getElementsByClassName("float")[0].classList.toggle("fix"));

    
    
  }
})
*/
// *** Code to toggle a class to pin nav bar from floating to top of screen
function pinBar() {
  document.getElementsByClassName("float")[0].classList.toggle("fix");
}
// End *** Code to toggle a class to pin nav bar from floating to top of screen *************************************** */

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
const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=c8e65c67b29a4c9cbeb5e066024d1050&units=imperial"
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

const fcAPIurl = "https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&appid=c8e65c67b29a4c9cbeb5e066024d1050&units=imperial"
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

// *** Generic function to Get Rental Info
buildHTML = (objectList, lease) => {
  const rentals = objectList // instead of (jsonObject["rentals"];)
  rentals.forEach(vehicle => { //  instead of ( for (let i = 0; i < rentals.length; i++ ) {} )        
    if (vehicle.name == lease) { 
      // Create an Element and assign a variable to it         
      let rOption = document.createElement("article");
      let topText = document.createElement("div");
      let hWrap = document.createElement("div");
      let h2RentObjct = document.createElement("h2");
      let h5Prompt = document.createElement("h5");
      let features = document.createElement("p");
      let line1 = document.createElement("div");
      let link = document.createElement("a");
      let img = document.createElement("img");
      let bttmText = document.createElement("div");     
      let h4Passengers = document.createElement("h4");      
      let space = document.createElement("br");
      let h3Taxes = document.createElement("h3");
      let line2 = document.createElement("div");
      let rentalFacts = document.createElement("div");
      let hlfDayRs = document.createElement("p");
      let fullDayRs = document.createElement("p");
      let hlfDayW = document.createElement("p");
      let fullDayW = document.createElement("p");         
                 
      // Assign input into the Element 
      // rOption & topText & hWrap = containers/no text       
      h2RentObjct.textContent = vehicle.name; // instead of (rentals[i].name;)
      h5Prompt.textContent = vehicle.prompt;
      features.innerHTML = vehicle.infoTitle + " an " + vehicle.transmission + ", a " + vehicle.engine + " with " + vehicle.cooling + " and " + vehicle.power +".";
      // line1 = a decoration line/no text
      link.setAttribute("href", vehicle.link);
      img.setAttribute("src", "images/" + vehicle.imgLoc);
      img.setAttribute("alt", "Image of " + vehicle.name);
      // bttmText & rentalFacts = a container/no text 
      h4Passengers.textContent = vehicle.occTitle + " " + vehicle.maxP;
      // space = a line space/no text
      h3Taxes.textContent = vehicle.taxes;
      // line2
      hlfDayRs.innerHTML = vehicle.hlfDayTitle + " " + vehicle.reserveTitle + " " + vehicle.reservation[0].halfDay;
      fullDayRs.innerHTML = vehicle.dayTitle + " " + vehicle.reserveTitle + " " + vehicle.reservation[0].fullDay;
      hlfDayW.innerHTML = vehicle.hlfDayTitle + " " + vehicle.wlkTitle + " " + vehicle.walkIn[0].halfDay;
      fullDayW.innerHTML = vehicle.dayTitle + " " + vehicle.wlkTitle + " " + vehicle.walkIn[0].fullDay;      
      
      // Give class names to Elements    
      //rentalFacts.id = id; ADD id VARIABLE AS THE THIRD VARIABLE IF YOU NEED TO ADD AN ID SOMEWHERE    
      rOption.className = "rental_card";
      topText.className = "r_card_top_txt"
      hWrap.className = "h_wrap";    
      h2RentObjct.className = "rental_title";
      h5Prompt.className = "prompt";
      features.className = "features";
      line1.className = "rental_line";
      link.className = "card_img_link";
      img.className = "rental_img";
      bttmText.className = "r_card_btm_txt";
      rentalFacts.className = "rental_facts";
      h4Passengers.className = "occupancy";
      h3Taxes.className = "incld_tax"
      line2.className= "rental_line";
         
      // Add the HTML & content to the web page     
      document.querySelector("#rental_cards").appendChild(rOption);
      rOption.appendChild(topText);
      topText.appendChild(hWrap);
      hWrap.appendChild(h2RentObjct);
      hWrap.appendChild(h5Prompt);
      topText.appendChild(features);
      rOption.appendChild(line1);
      rOption.appendChild(link);
      link.appendChild(img);
      rOption.appendChild(bttmText);
      bttmText.appendChild(h4Passengers);      
      bttmText.appendChild(space);
      bttmText.appendChild(h3Taxes);
      bttmText.appendChild(line2);
      bttmText.appendChild(rentalFacts);
      rentalFacts.appendChild(hlfDayRs);
      rentalFacts.appendChild(fullDayRs);
      rentalFacts.appendChild(hlfDayW);
      rentalFacts.appendChild(fullDayW);              
    }
  });
}
// End *** Generic function to Get Rental Info ************************************************************************** */

// *** Get the Rental Info from my Json file 
const rentalURL = "https://jmmonjeremy.github.io/XII_final_project_scoots/data/rental_info.json";
fetch(rentalURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        buildHTML(jsonObject["rentals"], "Honda Metro Scooter");
        buildHTML(jsonObject["rentals"], "Honda Dio Scooter");      
        buildHTML(jsonObject["rentals"], "Honda PCX150 Scooter");
        buildHTML(jsonObject["rentals"], "Honda Pioneer ATV");
        buildHTML(jsonObject["rentals"], "2 dr: Jeep Wrangler");
        buildHTML(jsonObject["rentals"], "4 dr: Jeep Wrangler");
      });
// End *** Get the Rentals Info Using fetch ****************************************************************************** */
 