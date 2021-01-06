//Movement Animation - Variables obtianed from HTML
//Planner Card
const card = document.querySelector('#card');
const title = document.querySelector('.card-title');
const cardText = document.querySelector('.card-text');
const plannerImg = document.querySelector('#planner-img');
const launchButton = document.querySelector('#launch-btn');
const viewGithubBtn = document.querySelector('#view-github-btn');
//Profile Gen Card
const card2 = document.querySelector('#card2')
const title2 = document.querySelector('.card-title-2');
const cardText2 = document.querySelector('.card-text-2');
const profileGenImg = document.querySelector('#profile-gen-img');
const launchBtn = document.querySelector('#launch-btn-2');
const viewGithubBtn2 = document.querySelector('#view-github-btn-2');
//Dev-Hangout Card
const card3 = document.querySelector('#card3')
const title3 = document.querySelector('.card-title3');
const cardText3 = document.querySelector('.card-text3');
const devHangoutImg = document.querySelector('#dev-hangout-img');
const launchBtn3 = document.querySelector('#launch-btn-3');
const viewGithubBtn3 = document.querySelector('#view-github-btn-3');
//Fitness Tracker Card
const card4 = document.querySelector('#card4')
const title4 = document.querySelector('.card-title4');
const cardText4 = document.querySelector('.card-text4');
const fitnessTrackerImg = document.querySelector('#fitness-tracker-img');
const launchBtn4 = document.querySelector('#launch-btn4');
const viewGithubBtn4 = document.querySelector('#view-github-btn4');
//Notepad Card
const card5 = document.querySelector('#card5')
const title5 = document.querySelector('.card-title5');
const cardText5 = document.querySelector('.card-text5');
const notepadImg = document.querySelector('#notepad-img');
const launchBtn5 = document.querySelector('#launch-btn5');
const viewGithubBtn5 = document.querySelector('#view-github-btn5');



//Animation for Planner Image & Card
//Moving Animation Event - Planner
card.addEventListener('mousemove', (e) => {
    console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Animate In - Planner - Planner
card.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //Popout effect - Planner
    plannerImg.style.transform = 'translateZ(115px)';
    title.style.transform = 'translateZ(115px)';
    cardText.style.transform = 'translateZ(90px)';
    launchButton.style.transform = 'translateZ(115px)';
    viewGithubBtn.style.transform = 'translateZ(115px)';
})

//Animate Out - Planner
card.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popin Effect - Planner
    plannerImg.style.transform = 'translateZ(0px)';
    title.style.transform = 'translateZ(0px)';
    cardText.style.transform = 'translateZ(0px)';
    launchButton.style.transform = 'translateZ(0px)';
    viewGithubBtn.style.transform = 'translateZ(0px)';
})

//Day Planner Button Events
//Onclick Event for launching Day Planner Site
function launchPlannerSite() {
    window.open("https://vlady14.github.io/Day_Planner/", '_blank');
};

//Onclick Even for launching Day Planner Github Repo
function launchPlannerRepo() {
    window.open("https://github.com/Vlady14/Day_Planner", '_blank');
};


//Animation for Profile Gen Card & Image
//Moving Animation Event - Profile Gen
card2.addEventListener('mousemove', (e) => {
    console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Animate In - Profile Gen
card2.addEventListener('mouseenter', (e) => {
    card2.style.transition = 'none';
    //Popout effect - Profile Gen
    profileGenImg.style.transform = 'translateZ(115px)';
    title2.style.transform = 'translateZ(115px)';
    cardText2.style.transform = 'translateZ(90px)';
    launchBtn.style.transform = 'translateZ(115px)';
    viewGithubBtn2.style.transform = 'translateZ(115px)';
})

//Animate Out - Profile Gen
card2.addEventListener('mouseleave', (e) => {
    card2.style.transition = 'all 0.5s ease';
    card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popin Effect - Profile Gen
    profileGenImg.style.transform = 'translateZ(0px)';
    title2.style.transform = 'translateZ(0px)';
    cardText2.style.transform = 'translateZ(0px)';
    launchBtn.style.transform = 'translateZ(0px)';
    viewGithubBtn2.style.transform = 'translateZ(0px)';
})

//Profile Generator Button Events
//Onclick Event for launching Profile Generator Site
function launchProfileGenSite() {
    window.open("https://drive.google.com/file/d/1jDKQ5yd9xZG6NooFr_4Uy_u0tBR7C6mC/view", '_blank');
};

//Onclick Even for launching Profile Generator Github Repo
function launchProfileGenRepo() {
    window.open("https://github.com/Vlady14/Profile_Generator", '_blank');
};


//Animation for Dev-Hangout Image & Card
//Moving Animation Event - Dev-Hangout
card3.addEventListener('mousemove', (e) => {
    console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
    card3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Animate In - Dev-Hangout
card3.addEventListener('mouseenter', (e) => {
    card3.style.transition = 'none';
    //Popout effect - Dev-Hangout
    devHangoutImg.style.transform = 'translateZ(115px)';
    title3.style.transform = 'translateZ(115px)';
    cardText3.style.transform = 'translateZ(90px)';
    launchBtn3.style.transform = 'translateZ(115px)';
    viewGithubBtn3.style.transform = 'translateZ(115px)';
})

//Animate Out - Dev-Hangout
card3.addEventListener('mouseleave', (e) => {
    card3.style.transition = 'all 0.5s ease';
    card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popin Effect - Dev-Hangout
    devHangoutImg.style.transform = 'translateZ(0px)';
    title3.style.transform = 'translateZ(0px)';
    cardText3.style.transform = 'translateZ(00px)';
    launchBtn3.style.transform = 'translateZ(0px)';
    viewGithubBtn3.style.transform = 'translateZ(0px)';
})

//Dev-Hangout Button Events
//Onclick Event for launching Dev-Hangout Site
function launchDevHangoutSite() {
    window.open("https://dev-hangout.herokuapp.com/", '_blank');
};

//Onclick Even for launching Dev-Hangout Github Repo
function launchDevHangoutRepo() {
    window.open("https://github.com/Vlady14/Dev-Hangout", '_blank');
};


//Animation for Fitness Tracker Image & Card
//Moving Animation Event - Fitness Tracker
card4.addEventListener('mousemove', (e) => {
    console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
    card4.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Animate In - Fitness Tracker
card4.addEventListener('mouseenter', (e) => {
    card4.style.transition = 'none';
    //Popout effect - Fitness Tracker
    fitnessTrackerImg.style.transform = 'translateZ(115px)';
    title4.style.transform = 'translateZ(115px)';
    cardText4.style.transform = 'translateZ(90px)';
    launchBtn4.style.transform = 'translateZ(115px)';
    viewGithubBtn4.style.transform = 'translateZ(115px)';
})

//Animate Out - Fitness Tracker
card4.addEventListener('mouseleave', (e) => {
    card4.style.transition = 'all 0.5s ease';
    card4.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popin Effect - Fitness Tracker
    fitnessTrackerImg.style.transform = 'translateZ(0px)';
    title4.style.transform = 'translateZ(0px)';
    cardText4.style.transform = 'translateZ(00px)';
    launchBtn4.style.transform = 'translateZ(0px)';
    viewGithubBtn4.style.transform = 'translateZ(0px)';
})

//Fitness Tracker Button Events
//Onclick Event for launching Fitness Tracker Site
function launchFitnessTrackerSite() {
    window.open("https://fitness-health-tracker.herokuapp.com/", '_blank');
};

//Onclick Even for launching Fitness Tracker Github Repo
function launchFitnessTrackerRepo() {
    window.open("https://github.com/Vlady14/Fitness_Tracker", '_blank');
};


//Animation for Notepad Image & Card
//Moving Animation Event - Notepad
card5.addEventListener('mousemove', (e) => {
    console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
    card5.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Animate In - Notepad
card5.addEventListener('mouseenter', (e) => {
    card5.style.transition = 'none';
    //Popout effect - Notepad
    notepadImg.style.transform = 'translateZ(115px)';
    title5.style.transform = 'translateZ(115px)';
    cardText5.style.transform = 'translateZ(90px)';
    launchBtn5.style.transform = 'translateZ(115px)';
    viewGithubBtn5.style.transform = 'translateZ(115px)';
})

//Animate Out - Notepad
card5.addEventListener('mouseleave', (e) => {
    card5.style.transition = 'all 0.5s ease';
    card5.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popin Effect - Notepad
    fitnessTrackerImg.style.transform = 'translateZ(0px)';
    title5.style.transform = 'translateZ(0px)';
    cardText5.style.transform = 'translateZ(00px)';
    launchBtn5.style.transform = 'translateZ(0px)';
    viewGithubBtn5.style.transform = 'translateZ(0px)';
})

//Notepad Button Events
//Onclick Event for launching Notepad Site
function launchNotepadSite() {
    window.open("https://note-pad-vd.herokuapp.com/", '_blank');
};

//Onclick Even for launching Notepad Github Repo
function launchNotepadRepo() {
    window.open("https://github.com/Vlady14/Note_Taker", '_blank');
};
