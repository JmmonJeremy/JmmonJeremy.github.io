// Current Year Code
// set variable to the new Date() class to make an object
let date = new Date();
// set variable to the getFullYear() child function
let year = date.getFullYear();
// replace the variable with the year through variable
document.getElementById("current_year").innerHTML = year;

// Last Update JS Code
// Set variable to the document.lastModified function result
let modified = document.lastModified;
// replace variable with the results from function call & replace modified in document
document.getElementById("modified").innerText = "Last Updated: " + modified;

