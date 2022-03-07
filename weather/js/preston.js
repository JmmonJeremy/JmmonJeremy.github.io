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
    document.getElementsByClassName("menu_a")[0].classList.toggle("responsive");     
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

// Change menu when clicked
/*function Switch() {
    let open = "Close";
    let closed = "&#9776; &nbsp; &nbsp;Menu"
    let my_menu =  document.getElementById("menu_a").innerHTML;
   
    document.getElementById("menu_a").innerHTML = closed;
}
  /*  if(my_menu == "&#9776; &nbsp; &nbsp;Menu") {
    document.getElementById("menu_a").innerHTML = open;
    } else {
        document.getElementById("menu_a").innerHTML = closed;
    }
} */
//let button = "Push to Close Menu"
//document.getElementById("menu_a").innerHTML = button;
/*let current = document.querySelector("#menu_a");
let selected = document.querySelector(".navigation");
current.addEventListener('click',() => {    
    function Switch();   
});*/
/*let closed = document.getElementsByClassName("navigation")[0];
closed.addEventListener("click", function() {
    if (closed.getAttribute("close") == closed.innerHTML) {
        closed.innerHTML = closed.getAttribute("&#9776; &nbsp; &nbsp;Menu");
    } else {
        closed.setAttribute("&#9776; &nbsp; &nbsp;Menu", closed.innerHTML);
        closed.innerHTML = closed.getAttribute("close")
    }
}, false)*/
