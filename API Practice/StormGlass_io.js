const lat = 58.7984;
const lng = 17.8081;
const params = 'waveHeight,airTemperature';

fetch(`https://api.stormglass.io/v2/weather/point?lat=20.423&lng=86.9223&params=airTemperature,windSpeed,humidity}`, {
  headers: {
    'Authorization': 'b37a94ea-b536-11ec-9d2c-0242ac130002-b37a9562-b536-11ec-9d2c-0242ac130002'
  }
}).then((response) => response.json()).then((jsonData) => {  
    console.log(jsObject);
    const weatherSummary = jsonData;
    let tempSummary = weatherSummary.main.temp;
    let windSpeedSummary = weatherSummary.wind.speed;
    let windChillSummary;
   /* if (tempSummary <= 50.0 && windSpeedSummary >= 3.0) {
        windChillSummary = 35.74 + 0.6215*tempSummary - 35.75*windSpeedSummary**0.16 + 0.4275*tempSummary*windSpeedSummary**0.16; 
        document.querySelector("#wind_chill").textContent = Math.round(windChillSummary);   
    }else {
        document.querySelector("#NA").textContent = "N/A";   
    }
    document.querySelector("#condition").innerHTML = weatherSummary.weather[0].main;
    document.querySelector("#temp").textContent = Math.round(weatherSummary.main.temp);
    document.getElementById("wind_speed").innerText = Math.round(weatherSummary.wind.speed);
    document.querySelector("#humidity").innerHTML = Math.round(weatherSummary.main.humidity);*/
});
fetch("https://api.stormglass.io/v1/weather/point?lat=20.1230&lng=86.9223", {
  headers: {
    "Authorization": "b37a94ea-b536-11ec-9d2c-0242ac130002-b37a9562-b536-11ec-9d2c-0242ac130002"  // Get your at https://stormglass.io
  }
}).then(function(response) {
  // Do something with response data.
  var jsonData = response.json();
  console.log(jsonData);
});