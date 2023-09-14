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
      itemAbout = document.querySelector('#item-about'),
      itemSkills = document.querySelector('#item-skills'),
      itemProjects = document.querySelector('#item-project'),
      itemContact = document.querySelector('#item-contact');

const menuFuntionalities = (idItem) =>{
  itemHome.classList.remove('active');
  itemSkills.classList.remove('active');
  itemProjects.classList.remove('active');
  itemContact.classList.remove('active');
  itemAbout.classList.remove('active');
  idItem.classList.add('active');
}

itemHome.addEventListener('click', () => {
  menuFuntionalities(itemHome);
});
itemAbout.addEventListener('click', () => {
  menuFuntionalities(itemAbout);
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


  //Contact actions

  const btnLn = document.querySelector('#ln'),
    btnMail = document.querySelector('#mail'),
    btnGit = document.querySelector('#github');

  btnLn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/giovanny-morales-218961101/');
  });

  btnMail.addEventListener('click', () => {
    window.location.href = "mailto:giomm269@gmail.com?";
  });

  btnGit.addEventListener('click', () => {
    window.open('https://github.com/giomm2');
  });
