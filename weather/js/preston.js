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
// Function to do hamburger menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive"); 
    document.getElementsByClassName("menu_a")[0].classList.toggle("responsive");     
}

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

// ***Current 5 Day Forecast Code
// #1 - If it is Sunday display this
if (dayName === "Sunday") {
    //changes display to block from none in css
    document.querySelector("#sunday").style.display = "block";
    document.querySelector("#monday").style.display = "block";
    document.querySelector("#tuesday").style.display = "block";
    document.querySelector("#wednesday").style.display = "block";  
    document.querySelector("#thursday").style.display = "block";
}
// #2 - If it is Monday display this
if (dayName === "Monday") {
    //changes display to block from none in css   
    document.querySelector("#monday").style.display = "block";
    document.querySelector("#tuesday").style.display = "block";
    document.querySelector("#wednesday").style.display = "block";  
    document.querySelector("#thursday").style.display = "block";
    document.querySelector("#friday").style.display = "block";
}
// #3 - If it is Tuesday display this
if (dayName === "Tuesday") {
    //changes display to block from none in css   
    document.querySelector("#tuesday").style.display = "block";  
    document.querySelector("#wednesday").style.display = "block";  
    document.querySelector("#thursday").style.display = "block";
    document.querySelector("#friday").style.display = "block";
    document.querySelector("#saturday").style.display = "block";
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
}
// #5 - If it is Thurssday display this
if (dayName === "Thursday") {
    //changes display to block from none in css   
    document.querySelector("#thursday").style.display = "block";
    document.querySelector("#friday").style.display = "block";
    document.querySelector("#saturday").style.display = "block";
    document.querySelector("#sunday").style.display = "block";
    document.querySelector("#sunday").style.order = 2;
    document.querySelector("#monday").style.display = "block";
    document.querySelector("#monday").style.order = 2;
}
// #5 - If it is Thurssday display this
if (dayName === "Friday") {
    //changes display to block from none in css   
    document.querySelector("#thursday").style.display = "block";
    document.querySelector("#friday").style.display = "block";
    document.querySelector("#saturday").style.display = "block";
    document.querySelector("#sunday").style.display = "block";
    document.querySelector("#sunday").style.order = 2;
    document.querySelector("#monday").style.display = "block";
    document.querySelector("#monday").style.order = 2;
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
}
// End *** Current 5 Day Forecast Code ********************************************************************************* */