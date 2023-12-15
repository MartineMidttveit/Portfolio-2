const container = document.querySelector(".container");
const items = document.querySelectorAll(".project");
const prevBtn = document.querySelectorAll(".prev-btn");
const nextBtn = document.querySelectorAll(".next-btn");
const itemCount = items.length;
let displayCount = 3;
let index = 0;

function showItems() {
  items.forEach((item, idx) => {
    if (window.innerWidth <= 767) displayCount = 1;
    else if (window.innerWidth <= 1180)displayCount = 2;
    else displayCount = 3;
    if (idx >= index && idx < index + displayCount) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function nextSlide() {
  if (index < itemCount - displayCount) {
    index++;
  }
  showItems();
}

function prevSlide() {
  if (index > 0) {
    index--;
  }
  showItems();
}

prevBtn.forEach(btn => btn.addEventListener("click", prevSlide));
nextBtn.forEach(btn => btn.addEventListener("click", nextSlide))

showItems();