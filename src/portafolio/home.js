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

//Menu actions
const itemHome = document.querySelector('#item-home'),
      itemSkills = document.querySelector('#item-skills'),
      itemProjects = document.querySelector('#item-project'),
      itemContact = document.querySelector('#item-contact');

const menuFuntionalities = (idItem) =>{
  itemHome.classList.remove('active');
  itemSkills.classList.remove('active');
  itemProjects.classList.remove('active');
  itemContact.classList.remove('active');
  idItem.classList.add('active');
}

itemHome.addEventListener('click', () => {
  menuFuntionalities(itemHome);
});
itemSkills.addEventListener('click', () => {
  menuFuntionalities(itemSkills);
});
itemProjects.addEventListener('click', () => {
  menuFuntionalities(itemProjects);
});
itemContact.addEventListener('click', () => {
  menuFuntionalities(itemContact);
});


//Home actions


const btnDownload = document.querySelector('#btn-download');

btnDownload.addEventListener('click', () => {
  window.open("https://1drv.ms/b/s!AsSMjUrLYm65n75X5t0Jx-V-WBODAA?e=RSOWsy");
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

  const btnBlackJack = document.querySelector('#blackjack-project');

  btnBlackJack.addEventListener('click', () => {
    window.open('https://giomm2.github.io/blackjack/');
  });







/* 
const btnTech1 = document.querySelector('#tech1'),
  btnTech2 = document.querySelector('#tech2'),
  btnTech3 = document.querySelector('#tech3'),
  btnTech4 = document.querySelector('#tech4'),
  btnM1 = document.querySelector('#m1'),
  btnM2 = document.querySelector('#m2'),
  btnM3 = document.querySelector('#m3'),
  btnM4 = document.querySelector('#m4');

const  menu = (current, div) => {
  let projects = document.querySelector('#projects'),
    experience = document.querySelector('#experience'),
    contact = document.querySelector('#contact'),
    skills = document.querySelector('#skills'),
    currents = document.querySelector(`#${current}`),
    title = document.querySelector('#title'),
    divs = document.querySelector(`#${div}`);

  projects.style.display = "none";
  experience.style.display = "none";
  contact.style.display = "none";
  skills.style.display = "none";
  currents.style.display = "block";

  btnM1.style.backgroundColor = 'white';
  btnM1.style.color = '#34495e';
  btnM1.style.fontSize = '100%';
  btnM2.style.backgroundColor = 'white';
  btnM2.style.color = '#34495e';
  btnM2.style.fontSize = '100%';
  btnM3.style.backgroundColor = 'white';
  btnM3.style.color = '#34495e';
  btnM3.style.fontSize = '100%';
  btnM4.style.backgroundColor = 'white';
  btnM4.style.color = '#34495e';
  btnM4.style.fontSize = '100%';

  divs.style.color = "white";
  divs.style.backgroundColor = "#34495e";
  divs.style.fontSize = '120%';

  switch(current) {
    case 'experience':
      title.textContent = 'About';
    break;
    case 'projects':
      title.textContent = 'Projects';
    break;
    case 'skills':
      title.textContent = 'Technologies';
    break;
    case 'contact':
      title.textContent = 'Contact';
    break;
    default:
      true;
  } 
} 
  const goLinkdin = () => {
    window.open("www.linkedin.com/in/giovanny-morales-218961101");
  }

  const menuTechnologies = (current, div) => {
    let languages = document.querySelector('#languages'),
      framework = document.querySelector('#frameworks'),
      db = document.querySelector('#db'),
      others = document.querySelector('#others'),
      currents = document.querySelector(`#${current}`),
      divs = document.querySelector(`#${div}`);
 

    languages.style.display = "none";
    framework.style.display = "none";
    db.style.display = "none";
    others.style.display = "none";
    currents.style.display = "block";
  
    btnTech1.style.color = 'white';
    btnTech1.style.backgroundColor = '#34495e';
    btnTech2.style.color = 'white';
    btnTech2.style.backgroundColor = '#34495e';
    btnTech3.style.color = 'white';
    btnTech3.style.backgroundColor = '#34495e';
    btnTech4.style.color = 'white';
    btnTech4.style.backgroundColor = '#34495e';

    divs.style.color = 'black';
    divs.style.backgroundColor = 'white';
  }

  btnTech1.addEventListener('click', () => {
    menuTechnologies('languages', 'tech1');
  });
  btnTech2.addEventListener('click', () => {
    menuTechnologies('frameworks','tech2');
  });
  btnTech3.addEventListener('click', () => {
    menuTechnologies('db', 'tech3');
  });
  btnTech4.addEventListener('click', () => {
    menuTechnologies('others','tech4');
  });

  btnM1.addEventListener('click', () => {
    menu('experience','m1');
  });
  btnM2.addEventListener('click', () => {
    menu('skills','m2');
  });
  btnM3.addEventListener('click', () => {
    menu('projects','m3');
  });
  btnM4.addEventListener('click', () => {
    menu('contact', 'm4')
  });

  menuTechnologies('languages', 'tech1');
  menu('experience','m1');
 */