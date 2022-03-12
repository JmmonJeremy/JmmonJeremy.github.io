// get all the images with data-src attribute
let imagesToLoad = document.querySelectorAll('img[data-src]');
// setting parameters for the Intersectional Observer
let imageOptions = {
threshold: 1, 
rootMargin: "0px 0px 0px 0px"
};
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