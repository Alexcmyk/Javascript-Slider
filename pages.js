let pageNumber = 0;

const nextTag = document.querySelector("footer img.next");
const outputTag = document.querySelector("h2");

const next = function () {
  pageNumber += 1;

  if (pageNumber > 4) {
    pageNumber = 1;
  }

  updateSection();
};

const updateSection = function () {
  outputTag.innerHTML = pageNumber;
};

nextTag.addEventListener("click", function () {
  next();
});
