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



/////////////////////////








<section class="recommendation container">
<div class="recommendation-wrapper">
  <div class="worker1 active-worker">
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore..</p>
    <img src="https://picsum.photos/140/140?random=10" alt="worker photo">
    <div class="worker-info">
      <span>❛❛</span>
      <span>graphic designer</span>
      <span>mau thomas</span>
    </div>
    <div class="change">
      <div class="first"></div>
      <div class="second"></div>
      <div class="third"></div>
    </div>

  </div>
  <div class="worker2 none">
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore..</p>
    <img src="https://picsum.photos/140/140?random=11" alt="worker photo">
    <div class="worker-info">
      <span>❛❛</span>
      <span>graphic designer</span>
      <span>mau thomas</span>
    </div>
    <div class="change">
      <div class="first"></div>
      <div class="second"></div>
      <div class="third"></div>
    </div>

  </div>
  <div class="worker3 none">
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore..</p>
    <img src="https://picsum.photos/140/140?random=12" alt="worker photo">
    <div class="worker-info">
      <span>❛❛</span>
      <span>graphic designer</span>
      <span>mau thomas</span>
    </div>
    <div class="change">
      <div class="first"></div>
      <div class="second"></div>
      <div class="third"></div>
    </div>

  </div>
</div>
</section>