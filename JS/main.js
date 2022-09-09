// Get Slider Items | Array.from [ES6 Feature]
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Nomber Of Slides
let slidesCount = sliderImages.length;

// Set Current Slide
let currentSlide = 1;

// Slide Number String Element
let slideNumberElement = document.getElementById("slider-namber");

// Previous and Next Buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// Handle Click On Previous And Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
let paginationElement = document.createElement("ul");

// Set id On Created Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based on Slides Cont
for (var i = 1; i <= slidesCount; i++) {
  // Create Theli
  let paginationItem = document.createElement("li");

  // Set Custom Attribute
  paginationItem.setAttribute("date-index", i);

  // Set Item Content
  //   paginationItem.innerHTML = i;
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items To The Main Ul List
  paginationElement.appendChild(paginationItem);
}

// Add The Created UL Element To THe Page
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL
let paginationCreatedUl = document.getElementById("pagination-ul");

// Get pagination Items | Array.from [ES6 Feature]
let paginationsBullets = Array.from(
  document.querySelectorAll(".indicators #pagination-ul li")
);

// Loop Through All Bullets Items
for (let i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("date-index"));

    theChecker();
  };
}

// Trigger TheChecker Function
theChecker();

// Create The Checker Function
function theChecker() {
  // Remove All Active Classes
  removeAllActive();

  // Set The Slide Number
  slideNumberElement.textContent = `Slide # ${currentSlide} of ${slidesCount}`;

  // Set Active Class on Current Slide
  sliderImages[currentSlide - 1].classList.add("active");

  // Set Active Class On Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check is Current slide is The First
  if (currentSlide === 1) {
    // Add Disabled Class From Prev Button
    prevButton.classList.add("disabled");
  } else {
    // Remove Disabled Class From Prev Button
    prevButton.classList.remove("disabled");
  }
  // Check is Current slide is The Last
  if (currentSlide === slidesCount) {
    // Add Disabled Class From Next Button
    nextButton.classList.add("disabled");
  } else {
    // Remove Disabled Class From Next Button
    nextButton.classList.remove("disabled");
  }
}

// Remove All Active Classes From Images And Pagination Bullets
function removeAllActive() {
  // loop Through Images
  sliderImages.forEach((ele) => {
    ele.classList.remove("active");
  });
  // loop Through paginations Bullets
  paginationsBullets.forEach((li) => {
    li.classList.remove("active");
  });
}

// Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    // do Nothing
    return false;
  } else {
    currentSlide++;

    theChecker();
  }
}

// Previous Slide Function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    // do Nothing
    return false;
  } else {
    currentSlide--;

    theChecker();
  }
}
