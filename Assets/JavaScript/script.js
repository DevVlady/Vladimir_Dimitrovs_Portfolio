//Obtain Page Sections from HTML
const mainPage = document.querySelector('#main-page');
const aboutMePage = document.querySelector('#about-me-page');
const portfolioPage = document.querySelector('#portfolio-page');
const contactMePage = document.querySelector('#contact-me-page');


//Obtain Buttons/Links from HTML
const homeButton = document.querySelector('#home-button');
const viewMyWorkButton = document.querySelector('#view-my-work-button');
const aboutMeButton = document.querySelector('#about-button');
const portfolioButton = document.querySelector('#portfolio-button');
const contactMeButton = document.querySelector('#contact-me-button')


//Event Listener for Home Buttom
homeButton.addEventListener('click', displayMainPage);
//Event listener to display the About Me page when about button is clicked
aboutMeButton.addEventListener('click', displayAboutPage);
//Event listener to display portfolio page when view my work btn is clicked
viewMyWorkButton.addEventListener('click', displayPortfolioPage);
//Event Listener to display portfolio page when port button is clicked
portfolioButton.addEventListener('click', displayPortfolioPage);
//Event Listener to display Contact Me page
contactMeButton.addEventListener('click', displayContactPage)


//Function to display the Main Page
function displayMainPage () {
    mainPage.style.display = 'block';
    aboutMePage.style.display = 'none';
    portfolioPage.style.display = 'none';
    contactMePage.style.display = 'none';
}

//Function to display the About Page
function displayAboutPage () {
    mainPage.style.display = 'none';
    aboutMePage.style.display = 'block';
    portfolioPage.style.display = 'none';
    contactMePage.style.display = 'none';
}

//Function to display Portfolio Page
function displayPortfolioPage () {
    mainPage.style.display = 'none';
    aboutMePage.style.display = 'none';
    portfolioPage.style.display = 'block';
    contactMePage.style.display = 'none';
}

//Function to display Portfolio Page
function displayContactPage() {
    mainPage.style.display = 'none';
    aboutMePage.style.display = 'none';
    portfolioPage.style.display = 'none';
    contactMePage.style.display = 'block';
}
