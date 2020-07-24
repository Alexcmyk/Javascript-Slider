let pageNumber = 0; //Setting page number

// Content for each page

const pages = [
  {
    copy: "a Brooklyn-based graphic designer",
    background: "#edc7a9",
    circle: "#3e78ed",
  },
  {
    copy: "Kayne West's biggest fan",
    background: "#a1fffe",
    circle: "#e34a47",
  },
  {
    copy: "looking for a job at the start of October",
    background: "#d3c7f3",
    circle: "#f7fe00",
  },
  {
    copy: `letting you<br><a href="#">download her PDF</a>`,
    background: "#faffb8",
    circle: "#b472e6",
  },
];

const nextTag = document.querySelector("footer img.next"); // grabs next img
const previousTag = document.querySelector("footer img.prev"); //grabs previous img
const randomTag = document.querySelector("footer img.random"); // grabs the random tag
const outputTag = document.querySelector("h2"); // grabs the H2
const circleTag = document.querySelector("section div.circle"); // Grabs the circle tag
const bodyTag = document.querySelector("body"); // grabs the body tag

// Next function that updates page number and runs updateSection function
const next = function () {
  pageNumber += 1;

  if (pageNumber > pages.length - 1) {
    //adjusts page number based on length of pages
    pageNumber = 0;
  }

  updateSection();
};

// Previous function that updates page number and runs updateSection function
const previous = function () {
  pageNumber = pageNumber - 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1; //adjusts page number based on length of pages
  }

  updateSection();
};

// random function that updates page number with random number and runs updateSection function
const random = function () {
  pageNumber = Math.floor(Math.random() * pages.length);
  updateSection();
};

// Funciton that changes the innerHTML of the H1
const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy; //Output tag grabs the H1 and updates based on pageNumber
  circleTag.style.backgroundColor = pages[pageNumber].circle; // Circle tag grabs the circle and updates the bg color
  bodyTag.style.backgroundColor = pages[pageNumber].background; // body tag grabs the body and updates bg color
};

// Event listeners for the click event on the previous and next images
nextTag.addEventListener("click", function () {
  next();
});

previousTag.addEventListener("click", function () {
  previous();
});

randomTag.addEventListener("click", function () {
  random();
});

// Keystroke event listeners for ArrowLeft and ArrowRight key

document.addEventListener("keyup", function (event) {
  // If the the key being pressed is ArrowRight
  if (event.key == "ArrowRight") {
    next();
  }

  if (event.key == "ArrowLeft") {
    previous();
  }
});
