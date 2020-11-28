//Obtain elements from HTML
const mainPage = document.querySelector('#main-page')
const homeButton = document.querySelector('#home-button')
const aboutMePage = document.querySelector('#about-me-page')
const viewMyWorkButton = document.querySelector('#view-my-work-button')


//Event listener to view my work button
viewMyWorkButton.addEventListener('click', displayAboutPage)

//Event Listener for Home Buttom
homeButton.addEventListener('click', displayMainPage)

//Function to display the Main Page
function displayMainPage () {
    mainPage.style.display = 'block';
    aboutMePage.style.display = 'none';
}

//Function to display the About Page
function displayAboutPage () {
    mainPage.style.display = 'none';
    aboutMePage.style.display = 'block';
}