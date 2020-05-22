// Data for holding what page we are on
let pageNumber = 0

// Slide content
const pages = [
    { copy: `is a Denver-based Sr. Graphic Designer. 💻`, background: `#edc7a9`, circle: `#3e78ed` },
    { copy: `loves his dog Winston. 🐶`, background: `#a1fffe`, circle: `#e34a47` },
    { copy: `builds guitar pedals in is spare time. 🎸`, background: `#d3c7f3`, circle: `#f7fe00` },
    { copy: `connects socially here on <a href="http://www.instagram.com/alexcmyk">instagram.</a> 📱`, background: `#faffb8`, circle: `#b472e6` }
]


// Variable to grab the page content
const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')
// Function to increase the pageNumber
const next = function () {
    pageNumber += 1

    if (pageNumber > pages.length - 1) {
        pageNumber = 0
    }
    updateSection()
}
// Pick a random slide
const random = function () {
    pageNumber = Math.floor(Math.random() * pages.length)
    updateSection()
}

// Make a previous function to decrease the pageNumber
const previous = function () {
    pageNumber -= 1
    if (pageNumber < 0) {
        pageNumber = pages.length - 1
    }
    updateSection()
}
// This will update the section's content and style
const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy
    circleTag.style.backgroundColor = pages[pageNumber].circle
    bodyTag.style.backgroundColor = pages[pageNumber].background

}
// Click event for the next button
nextTag.addEventListener('click', function () {
    next()
})
// Click event for the previous button.
previousTag.addEventListener('click', function () {
    previous()
})

// Click event for previous button.
randomTag.addEventListener('click', function () {
    random()
})

// Keyboard Events
document.addEventListener('keyup', function (event) {
    //   Of the key is arrowRight
    if (event.key == 'ArrowRight') {
        next()
    }

    if (event.key == 'ArrowLeft') {
        previous()
    }

    if (event.key == 'ArrowDown') {
        random()
    }
})
