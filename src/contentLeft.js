import Github from './svg_icons/logo-github.svg';
import Call from './svg_icons/call-outline.svg';
import Linkedin from './svg_icons/logo-linkedin.svg';

function contentLeft() {
    const element = document.createElement('div');
    element.classList.add('container-left');

    //title container, consist of a title, job specification and little sum up of what i do.
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    // title
    const title = document.createElement('h1');
    title.innerHTML = 'Paolo Milutinovic';

    // job specification
    const jobName = document.createElement('h2');
    jobName.classList.add('job-name');
    jobName.textContent = 'Junior web developer';

    //Little sum up of what i do
    const sumUp = document.createElement('p');
    sumUp.classList.add('sum-up');
    sumUp.innerHTML = 'I build accessible, inclusive products and digital experiences for the web.';


    //append title to container
    titleContainer.appendChild(title);
    //append jobname to container
    titleContainer.appendChild(jobName);
    //append sum up to container
    titleContainer.appendChild(sumUp);


    // List that takes you to the different parts of the website.

    // square with animation
    const squareLi = document.createElement('div');
    squareLi.classList.add('square-li');

    const squareLi2 = document.createElement('div');
    squareLi2.classList.add('square-li');

    const squareLi3 = document.createElement('div');
    squareLi3.classList.add('square-li');


    //menu container
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    //unordered list
    const unorderedList = document.createElement('ul');

    //About
    const listAbout = document.createElement('li');
    listAbout.classList.add('li-about');
    const aAbout = document.createElement('a');
    aAbout.classList.add('a-about');
    aAbout.href = '#container-right';

    const spanAbout = document.createElement('span');
    spanAbout.innerHTML = 'About';

    listAbout.appendChild(squareLi);
    listAbout.appendChild(spanAbout);
    aAbout.appendChild(listAbout);

    unorderedList.appendChild(aAbout);


    //Experience
    const listExperience = document.createElement('li');
    listExperience.classList.add('li-experience');

    const aExperience = document.createElement('a');
    aExperience.classList.add('a-experience');
    aExperience.href = '#experience-title'

    const spanExperience = document.createElement('span');
    spanExperience.innerHTML = 'Experience';

    listExperience.appendChild(squareLi2);
    listExperience.appendChild(spanExperience);
    aExperience.appendChild(listExperience)
    unorderedList.appendChild(aExperience);



    //Projects
    const listProjects = document.createElement('li');
    listProjects.classList.add('li-project');

    const aProjects = document.createElement('a');
    aProjects.href = '#project-title';
    aProjects.classList.add('a-project');

    const spanProject = document.createElement('span');
    spanProject.innerHTML = 'Projects';

    listProjects.appendChild(squareLi3);
    listProjects.appendChild(spanProject);
    aProjects.appendChild(listProjects);

    unorderedList.appendChild(aProjects);



    
    //Links to different social media
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');



    const agit = document.createElement('a');
    agit.href = 'https://github.com/LAGstudi0';
    const gitLogo = new Image();
    gitLogo.classList.add('icon');
    gitLogo.src = Github; 
    agit.appendChild(gitLogo);

    const aphone = document.createElement('a');
    aphone.addEventListener('click', () => {
        alert('My phone is +44 74117460769');
    });
    const phoneLogo = new Image();
    phoneLogo.classList.add('icon');
    phoneLogo.src = Call; 
    aphone.appendChild(phoneLogo);

    const alinkdn = document.createElement('a');
    alinkdn.href = 'https://www.linkedin.com/in/paolomilutinovicmart%C3%ADnez';
    const linkdnLogo = new Image();
    linkdnLogo.classList.add('icon');
    linkdnLogo.src = Linkedin; 
    alinkdn.appendChild(linkdnLogo);

    iconContainer.appendChild(agit);
    iconContainer.appendChild(aphone);
    iconContainer.appendChild(alinkdn);






    element.appendChild(titleContainer);
    element.appendChild(unorderedList);
    element.appendChild(iconContainer)




    return element;
}

export default contentLeft;