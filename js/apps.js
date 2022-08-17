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
let htmlID = document.getElementById("htmlID"),
  cssID = document.getElementById("cssID"),
  responsiveID = document.getElementById("responsiveID"),
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
  firstbtn.classList.add("active-button");
  secondbtn.classList.remove("active-button");
  thirdbtn.classList.remove("active-button");
  worker1.classList.add("active-worker");
  worker2.classList.remove("active-worker");
  worker2.classList.add("none");
  worker3.classList.remove("active-worker");
  worker3.classList.add("none");
}
function showSecond() {
  console.log("2");

  firstbtn.classList.remove("active-button");
  secondbtn.classList.add("active-button");
  thirdbtn.classList.remove("active-button");
  worker1.classList.add("none");
  worker1.classList.remove("active-worker");
  worker2.classList.remove("none");
  worker2.classList.add("active-worker");
  worker3.classList.remove("active-worker");
  worker3.classList.add("none");
}
function showThird() {
  console.log("3");

  firstbtn.classList.remove("active-button");
  secondbtn.classList.remove("active-button");
  thirdbtn.classList.add("active-button");
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
  for (i = 0; i < projects.length; i++) {
    filterRemoveClass(projects[i], "show-filter");
    if (projects[i].className.indexOf(element) > -1)
      filterAddClass(projects[i], "show-filter");
  }
}
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

let topic = document.getElementsByClassName("topic");
for (let i = 0; i < topic.length; i++) {
  topic[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
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
}
const modalEl = document.querySelector(".modal"),
  closeBtn = document.querySelector(".modal-close"),
  sendBtn = document.querySelector("#sendBtn"),
  userName = document.getElementById("#name"),
  userEmail = document.getElementById("#email"),
  userWebsite = document.getElementById("#website"),
  userMessage = document.getElementById("#message");
sendBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);

function showModal() {
  if (validateForm()) {
    modalEl.classList.add("open");
  }
}
function closeModal() {
  modalEl.classList.remove("open");
}
function checkName() {
  if (userName < 2) {
    alert("Please enter your Name");
  }
}
function checkEmail() {
  if (userEmail < 8) {
    alert("Please enter your Email");
  }
}
function checkWebsite() {
  if (userWebsite < 10) {
    alert("Please enter your Website");
  }
}
function checkMessage() {
  if (userMessage < 20) {
    alert("Your message must be atleast 20 symbols");
  }
}
function validateForm() {
  checkName();
  checkEmail();
  checkWebsite();
  checkMessage();
}
