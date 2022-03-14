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
// End *** Current Weekday, Day of the Month, & Month Code ************************************************************ */

// *** LazyLoad Images From "src" When on Screen Code
// get all the images with data-src attribute
let imagesToLoad = document.querySelectorAll('img[data-src]');
// get the information in "data-src" and put it into "src" then erase "data-src"
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
// first check to see if "intersectionObserver" is supported
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    // loop through each image and check status and load if necessary
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } 
  // just load all images if "intersectionObserver" is not supported
  else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
// End *** LazyLoad Images From "src" When on Screen Code *********************************************************** */

// *** LazyLoad Images From "sources - srcset" When on Screen Code
// get all the images with data-srcset attribute
let smallerImagesToLoad = document.querySelectorAll("source[data-srcset]")
// get the information in "data-srcset" and put it into "srcset" then erase "data-srcset"
const loadSmallerImages = (image) => {
  image.setAttribute('srcset', image.getAttribute('data-srcset'));
  image.onload = () => {
    image.removeAttribute('data-srcset');
  };
};
// first check to see if "intersectionObserver" is supported
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadSmallerImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    // loop through each image and check status and load if necessary
    smallerImagesToLoad.forEach((source) => {
      observer.observe(source);
    });
  } 
  // just load all images if "intersectionObserver" is not supported
  else {
    smallerImagesToLoad.forEach((source) => {
      loadSmallerImages(source);
    });
  }
// End *** LazyLoad Images From "sources - srcset" When on Screen Code ************************************** ******* */

 