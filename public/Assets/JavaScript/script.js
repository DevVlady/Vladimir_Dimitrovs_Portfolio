//Obtain Page Sections from HTML
const homePage = document.querySelector('#home-page');
const aboutMePage = document.querySelector('#about-me-page');
const portfolioPage = document.querySelector('#portfolio-page');
const contactMePage = document.querySelector('#contact-me-page');

//Obtain the View My Work Button from home page section in HTML
const viewMyWorkButton = document.querySelector('#view-my-work-button');

//Event listeners for the View My Work Button on Home Page
viewMyWorkButton.addEventListener('click', displayAboutPage);


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