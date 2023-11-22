//Menu responsive

const iconResponsiveMenu = document.querySelector('#icon-responsive-menu');
const  responsiveMenu = () => {
  var menuItem = document.querySelector("#myTopnav");
  if (menuItem.className === "topnav") {
    menuItem.className += " responsive";
  } else {
    menuItem.className = "topnav";
  }
}

iconResponsiveMenu.addEventListener('click', () => {
  responsiveMenu();
});

//Home actions

const btnDownload = document.querySelector('#btn-download');

btnDownload.addEventListener('click', () => {
  window.open("https://1drv.ms/b/s!AsSMjUrLYm65n9pWdDHDcXwLzt6zGg?e=Cu5Wwu");
});


//Skills actions

const btnSkills = document.querySelector('#btn-skills'),
  btnTools = document.querySelector('#btn-tools'),
  divSkills = document.querySelector('#div-skills'),
  divTools = document.querySelector('#div-tools');

const skillsFuntions = (divHide, divShow, btnActive, btnDisable) => {

  btnActive.classList.add('skills-btn-active');
  btnDisable.classList.remove('skills-btn-active');

  btnActive.classList.remove('skills-btn');
  btnDisable.classList.add('skills-btn');

  divShow.style.display = 'block';
  divHide.style.display ='none';
}

btnSkills.addEventListener('click', () => {
  skillsFuntions(divTools, divSkills, btnSkills, btnTools);
});

btnTools.addEventListener('click', () => {
  skillsFuntions(divSkills, divTools, btnTools, btnSkills);
});

//Project actions

const btnBlackJack = document.querySelector('#blackjack-project'),
      btnRockPaperScissors = document.querySelector('#rockPaperScissors-project');

btnBlackJack.addEventListener('click', () => {
  window.open('https://giomm2.github.io/blackjack/');
});

btnRockPaperScissors.addEventListener('click', () => {
  window.open('https://giomm2.github.io/rockpaperscissor/');
});


//Contact actions

const btnLn = document.querySelector('#ln'),
  btnMail = document.querySelector('#mail'),
  btnGit = document.querySelector('#github'),
  btnCall = document.querySelector('#call'),
  callText = document.querySelector('#contact-call');

btnLn.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/giovanny-morales-218961101/');
});

btnMail.addEventListener('click', () => {
  window.location.href = "mailto:giomm269@gmail.com?";
});

btnGit.addEventListener('click', () => {
  window.open('https://github.com/giomm2');
});

btnCall.addEventListener('click', () => {
  callText.innerHTML = '(+506)62058911';
});

//Scrollspy

const scrollHandler = () => {

  const menu = document.querySelector('.items-menu-container');
  const homeContent = document.querySelector('.home-content'),
    aboutContent = document.querySelector('.about-content'),
    skillsContent = document.querySelector('.skills-content'),
    projectsContent = document.querySelector('.projects-content'),
    contactContent = document.querySelector('.contact-content');
  
  const homeItem = document.querySelector('#item-home'),
    aboutItem = document.querySelector('#item-about'),
    skillsItem = document.querySelector('#item-skills'),
    projectItem = document.querySelector('#item-project'),
    contactItem = document.querySelector('#item-contact');

  let pos_menu = window.scrollY + menu.offsetHeight;

  let pos_home = homeContent.offsetTop + homeContent.offsetHeight;
  let pos_about = aboutContent.offsetTop + aboutContent.offsetHeight;
  let pos_skills = skillsContent.offsetTop + skillsContent.offsetHeight;
  let pos_project = projectsContent.offsetTop + projectsContent.offsetHeight;
  let pos_contact = contactContent.offsetTop + contactContent.offsetHeight;

  let distance_home = pos_home - pos_menu;
  let distance_about = pos_about - pos_menu;
  let distance_skills = pos_skills - pos_menu;
  let distance_project = pos_project - pos_menu;
  let distance_contact = pos_contact - pos_menu;

  let min = Math.min(...[distance_home, distance_about, distance_skills,distance_project,distance_contact].filter(num => num > 0));
  
  homeItem.classList.remove('active');
  skillsItem.classList.remove('active');
  aboutItem.classList.remove('active');
  projectItem.classList.remove('active');
  contactItem.classList.remove('active');
    
  if(min === distance_home) homeItem.classList.add('active');
  if(min === distance_about) aboutItem.classList.add('active');
  if(min === distance_skills) skillsItem.classList.add('active');
  if(min === distance_project) projectItem.classList.add('active');
  if(min === distance_contact) contactItem.classList.add('active');
}

window.addEventListener('scroll', scrollHandler);
