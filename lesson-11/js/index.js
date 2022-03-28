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

// *** Generic function to Get Town Info
buildHTML = (objectList, city, id) => {
  const towns = objectList // instead of (jsonObject["towns"];)
  towns.forEach(place => { //  instead of ( for (let i = 0; i < towns.length; i++ ) {} )        
    if (place.name == city) { 
      // Create an Element and assign a variable to it         
      let town = document.createElement("section");
      let townFacts = document.createElement("div");     
      let h2 = document.createElement("h2");
      let pMotto = document.createElement("p");
      let pFounded = document.createElement("p");
      let pPopulation = document.createElement("p");
      let pRainfall = document.createElement("p");
      let tabletLine = document.createElement("div");
      let line = document.createElement("div");     
      let img = document.createElement("img");           
      // Assign input into the Element        
      h2.textContent = place.name // instead of (towns[i].name;)
      pMotto.innerHTML = place.motto // instead of (towns[i].motto;)
      pFounded.innerText = "Year Founded: " + place.yearFounded // instead of (towns[i].yearFounded;)
      pPopulation.innerHTML = "Population: " + place.currentPopulation // instead of (towns[i].currentPopulation;)
      pRainfall.innerText = "Annual Rain Fall: " + place.averageRainfall // instead of (towns[i].averageRainfall;)
      //line.textContent = "place.photo" // instead of (towns[i].photo;)
      img.setAttribute("src", "images/" + place.photo);
      img.setAttribute("alt", "Image of " + place.name);     
      // Give class names to Elements
      townFacts.id = id;
      townFacts.className = "townFacts";
      town.className = "townCard";    
      h2.className = "townName";
      pMotto.className = "townMotto";
      pFounded.className = "founded";
      pPopulation.className = "population";
      pRainfall.className = "rainfall";
      tabletLine.className = "tabletLine";
      line.className = "townLine";     
      img.className = "townPhoto";
      // Add the HTML & content to the web page     
      document.querySelector("div.towns").appendChild(town);
      town.appendChild(townFacts);
      townFacts.appendChild(h2);      
      townFacts.appendChild(pMotto);
      townFacts.appendChild(pFounded);
      townFacts.appendChild(pPopulation);
      townFacts.appendChild(pRainfall);
      townFacts.appendChild(tabletLine);    
      town.appendChild(img);
      town.appendChild(line);           
    }
  });
}
// End *** Generic function to Get Town Info ************************************************************************** */

// *** Get the Town Info Using fetch 
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        buildHTML(jsonObject["towns"], "Fish Haven", "townFacts1F");
        buildHTML(jsonObject["towns"], "Preston", "townFacts2P");
        buildHTML(jsonObject["towns"], "Soda Springs", "townFacts3S");
      });
// End *** Get the Town Info Using fetch ****************************************************************************** */
 