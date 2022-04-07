//curl --request GET --url \
//'https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=wUFI21XwMsmJl4Kkg7hQgqVmd9U3C6Rt'

const fetch = require("node-fetch");
const queryString = require('query-string');
const moment = require("moment");

// set the Timelines GET endpoint as the target URL
const getTimelineURL = "https://api.tomorrow.io/v4/timelines";

// get your key from app.tomorrow.io/development/keys
const apikey = "https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=wUFI21XwMsmJl4Kkg7hQgqVmd9U3C6Rt";

// pick the location, as a latlong pair
let location = [20.4230, -86.9223];

// list the fields
const fields = [  
  "temperature",
  "weatherCode",
];

// choose the unit system, either metric or imperial
const units = "imperial";

// set the timesteps, like "current", "1h" and "1d"
const timesteps = ["current", "1d"];

// configure the time frame up to 6 hours back and 15 days out
const now = moment.pst();
const startTime = moment.pst(now).add(0, "minutes").toISOString();
const endTime = moment.pst(now).add(5, "days").toISOString();

// specify the timezone, using standard IANA timezone format
const timezone = "Mexico/General";

// request the timelines with all the query string parameters as options
const getTimelineParameters =  queryString.stringify({
    apikey,
    location,
    fields,
    units,
    timesteps,
    startTime,
    endTime,
    timezone,
}, {arrayFormat: "comma"});

fetch(getTimelineURL + "?" + getTimelineParameters, {method: "GET"})
  .then((result) => result.json())
  .then((json) => console.log(json)
  .catch((error) => console.error("error: " + err))
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
});

/*

---- [PREMIUM FEATURE] contact sales@tomorrow.io ----

// set the Timelines POST endpoint as the target URL
const postTimelineURL = 'https://api.tomorrow.io/v4/timelines' + "?apikey=" + apikey;

fields = {
  "precipitationIntensityMax",
  "precipitationTypeMax",
  "windSpeedAverage",
  "temperatureMin",
  "temperatureMax",
  "cloudCoverMax"
}

location = {
     "type":"Polygon",
        "coordinates":
        [[[-73.985043,40.753554],[-73.990724,40.75595],[-73.984726,40.764167],[-73.979057,40.761747],[-73.985043,40.753554]]]
      }

const postTimelineOptions = {method: 'POST',
  				headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify({
                   location
                   fields,
                   units,
                   timesteps,
                   startTime,
                   endTime,
                   timezone
                 })};

fetch(postTimelineURL, postTimelineOptions)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error: ' + err));

*/