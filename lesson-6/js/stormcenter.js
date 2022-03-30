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

// *** Function to do hamburger menu
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

// *** Code to Add the Class="show_list" to Make a Label for the List Attribute in the Form
let action = document.querySelector("#clicked");
let remove = document.querySelector("#choose_type")
let remove_arrow = document.querySelector("#choose_type_symbol")

action.addEventListener("click", function handleClick() {
    remove.classList.add("show_list");
    remove_arrow.classList.add("show_list");
    clicked.classList.add("show_list");
  });
  // End *** Code to Add the Class="show_list" to Make a Label for the List Attribute in the Form ********************* */

