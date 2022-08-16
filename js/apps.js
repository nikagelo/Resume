//////////////////////////////////////////////////////////Slider Section Javascript
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
//////////////////////////////////////////////////////More about me Section Javascript
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
///////////////////////////////////////////////////////////////Recommendations
let firstbtn = document.querySelector(".first");
let secondbtn = document.querySelector(".second");
let thirdbtn = document.querySelector(".third");
let worker1 = document.querySelector(".worker1");
let worker2 = document.querySelector(".worker2");
let worker3 = document.querySelector(".worker3");

function showFirst() {
  console.log("1");
  worker1.classList.add("active-worker");
  worker2.classList.remove("active-worker");
  worker2.classList.add("none");
  worker3.classList.remove("active-worker");
  worker3.classList.add("none");
}
function showSecond() {
  console.log("2");
  worker1.classList.add("none");
  worker1.classList.remove("active-worker");
  worker2.classList.remove("none");
  worker2.classList.add("active-worker");
  worker3.classList.remove("active-worker");
  worker3.classList.add("none");
}
function showThird() {
  console.log("3");
  worker1.classList.remove("active-worker");
  worker1.classList.add("none");
  worker2.classList.remove("active-worker");
  worker2.classList.add("none");
  worker3.classList.remove("none");
  worker3.classList.add("active-worker");
}

firstbtn.addEventListener("click", showFirst);
secondbtn.addEventListener("click", showSecond);
thirdbtn.addEventListener("click", showThird);
////////////////////////////////////////////////////////////////Latest projects
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
///////////////////////////////////////////////////////////////ROSA Team
let client = document.querySelector("client-example");
function addClass() {
  client.classList.add("appear");
}
function removeClass() {
  client.classList.add("disappear");
}
//////////////////////////////////////////////////////////////Contact Us

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage({
    name: e.target.name.value,
    email: e.target.email.value,
    website: e.target.website.value,
    message: e.target.message.value,
  });
});

function sendMessage(data) {
  fetch("http://borjomi.loremipsum.ge/api/send-message", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((respData) => {
      console.log(respData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // let request = new XMLHttpRequest();
  // request.open("POST", "http://borjomi.loremipsum.ge/api/send-message");
  // request.onloadend = function (data) {
  //   if (data.status == 1) {
  //     alert("Thank you for getting in touch! We appreciate you contacting us.");
  //   }
  // };

  // request.send(message);
}
