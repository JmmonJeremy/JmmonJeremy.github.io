// Current Year Code
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

// Function to do hamburger menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// Date - get it in parts
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


