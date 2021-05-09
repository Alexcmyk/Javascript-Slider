let pageNumber = 0; //Setting page number

// Content for each page
const pages = [
    {
        copy: 'A Denver-based graphic designer & developer.',
        background: '#a9eded',
        circle: '#3e78ed',
        img: '',
    },
    {
        copy: 'Loves working with React and Python.',
        background: '#a1beff',
        circle: '#e34a47',
        img: '',
    },
    {
        copy: 'Hi',
        background: '#d3c7f3',
        circle: '#f7fe00',
        img: '',
    },
    {
        copy: `Hello`,
        background: '#faffb8',
        circle: '#f7fe00',
        img: '',
    },
    {
        copy: `Currently accepting freelance projects.`,
        background: '#faffb8',
        circle: '#f7fe00',
        img: '',
    },
    {
        copy: `connecting online at my website <a class="linkToSite" href="http://www.alexkirts.com">alexkirts.com</a>`,
        background: '#faffb8',
        circle: '#f7fe00',
        img: '',
    },
];

// Query Selectors
const nextTag = document.querySelector('footer img.next'); // grabs next img
const previousTag = document.querySelector('footer img.prev'); //grabs previous img
const randomTag = document.querySelector('footer img.random'); // grabs the random tag
const outputTag = document.querySelector('h2'); // grabs the H2
const circleTag = document.querySelector('section div.circle'); // Grabs the circle tag
const bodyTag = document.querySelector('body'); // grabs the body tag

// const imgTag = document.querySelector('.image'); Not using at the moment
// console.dir(imgTag); // Finds all the attributes you can change and logs them

// Functions
function updateSection() {
    outputTag.innerHTML = pages[pageNumber].copy; //Output tag grabs the H1 and updates based on pageNumber
    circleTag.style.backgroundColor = pages[pageNumber].circle; // Circle tag grabs the circle and updates the bg color
    bodyTag.style.backgroundColor = pages[pageNumber].background; // body tag grabs the body and updates bg color
    // imgTag.src = pages[pageNumber].img; Not using at the moment
}

// Next function that updates page number and runs updateSection function
function next() {
    pageNumber += 1;

    if (pageNumber > pages.length - 1) {
        //adjusts page number based on length of pages
        pageNumber = 0;
    }
    updateSection();
}

// Previous function that updates page number and runs updateSection function
function previous() {
    pageNumber = pageNumber - 1;

    if (pageNumber < 0) {
        pageNumber = pages.length - 1; //adjusts page number based on length of pages
    }
    updateSection();
}

function random() {
    pageNumber = Math.floor(Math.random() * pages.length);
    updateSection();
}

// Event listeners
nextTag.addEventListener('click', next);
previousTag.addEventListener('click', previous);
randomTag.addEventListener('click', random);

// Keystroke event listeners for ArrowLeft and ArrowRight key
document.addEventListener('keyup', function (e) {
    // If the the key being pressed is ArrowRight
    if (e.key == 'ArrowRight') {
        next();
    }

    if (e.key == 'ArrowLeft') {
        previous();
    }

    if (e.key == 'r') {
        random();
    }
});
