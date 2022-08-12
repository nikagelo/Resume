///Slider Section Javascript
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 5000);
}
///More about me Section Javascript
htmlID = document.getElementById("htmlID");
cssID = document.getElementById("cssID");
responsiveID = document.getElementById("responsiveID");
jsID = document.getElementById("jsID");

let myScrollFunc = function () {
  let y = window.scrollY;
  if (y >= 530) {
    htmlID.className = "line show";
    cssID.className = "line show";
    responsiveID.className = "line show";
    jsID.className = "line show";
  } else {
    htmlID.className = "line hide";
    cssID.className = "line hide";
    responsiveID.className = "line hide";
    jsID.className = "line hide";
  }
};
window.addEventListener("scroll", myScrollFunc);
//Latest projects
filterSelection("all");
function filterSelection(element) {
  let projects, i;
  projects = document.getElementsByClassName("project");
  if (element == "all") element = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < projects.length; i++) {
    filterRemoveClass(projects[i], "show-filter");
    if (projects[i].className.indexOf(element) > -1)
      filterAddClass(projects[i], "show-filter");
  }
}

// Show filtered elements
function filterAddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function filterRemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
let btnContainer = document.getElementById("BtnContainer");
let topic = document.getElementsByClassName("topic");
for (let i = 0; i < topic.length; i++) {
  topic[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//ROSA Team
let client = document.querySelector("client-example");
function addClass() {
  client.classList.add("appear");
}
function removeClass() {
  client.classList.add("disappear");
}
