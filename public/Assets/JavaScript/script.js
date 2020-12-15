//Obtain Page Sections from HTML
const homePage = document.querySelector('#home-page');
const aboutMePage = document.querySelector('#about-me-page');
const portfolioPage = document.querySelector('#portfolio-page');
const contactMePage = document.querySelector('#contact-me-page');

//Obtain the View My Work Button from home page section in HTML
const viewMyWorkButton = document.querySelector('#view-my-work-button');

//Get links from the About Me Page Section in HTML
const ampHomeButton = document.querySelector('#amp-home-link');
const ampPortfolioButton = document.querySelector('#amp-portfolio-link');
const ampContactMeButton = document.querySelector('#amp-contact-link')

//Get links from the Portfolio Page Section in HTML
const ppHomeButton = document.querySelector('#pp-home-link');
const ppAboutMeButton = document.querySelector('#pp-about-link');
const ppContactMeButton = document.querySelector('#pp-contact-link');

//Get links from the Contact Me Page section in HTML
const cmpHomeButton = document.querySelector('#cmp-home-link');
const cmpAboutMeButton = document.querySelector('#cmp-about-link');
const cmpPortfolioButton = document.querySelector('#cmp-portfolio-link');


//Event listeners for the View My Work Button on Home Page
viewMyWorkButton.addEventListener('click', displayAboutPage);

//Event Listeners for links on the About Me Page
ampHomeButton.addEventListener('click', displayHomePage);
ampPortfolioButton.addEventListener('click', displayPortfolioPage);
ampContactMeButton.addEventListener('click', displayContactPage);

//Event Listeners for all links in the Portfolio Page
ppHomeButton.addEventListener('click', displayHomePage)
ppAboutMeButton.addEventListener('click', displayAboutPage);
ppContactMeButton.addEventListener('click', displayContactPage);

//Event listeners for all links in the navbar on Contact Me Page
cmpHomeButton.addEventListener('click', displayHomePage);
cmpAboutMeButton.addEventListener('click', displayAboutPage);
cmpPortfolioButton.addEventListener('click', displayPortfolioPage);


//Function to display the Main Page
function displayHomePage () {
    homePage.style.display = 'block';
    aboutMePage.style.display = 'none';
    portfolioPage.style.display = 'none';
    contactMePage.style.display = 'none';
}

//Function to display the About Page
function displayAboutPage () {
    homePage.style.display = 'none';
    aboutMePage.style.display = 'block';
    portfolioPage.style.display = 'none';
    contactMePage.style.display = 'none';
}

//Function to display Portfolio Page
function displayPortfolioPage () {
    homePage.style.display = 'none';
    aboutMePage.style.display = 'none';
    portfolioPage.style.display = 'block';
    contactMePage.style.display = 'none';
}

//Function to display Portfolio Page
function displayContactPage() {
    homePage.style.display = 'none';
    aboutMePage.style.display = 'none';
    portfolioPage.style.display = 'none';
    contactMePage.style.display = 'block';
}