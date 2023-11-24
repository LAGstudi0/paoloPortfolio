import experience from "./experience";
import projects from "./projects";

function rightSection() {
    const element = document.createElement('div');
    element.classList.add('container-right');
    element.id = 'container-right';

    //intro about me
    //container
    const introContainer = document.createElement('div');
    introContainer.classList.add('intro-container');

    //different parragraps
    const introP1 = document.createElement('p');
    introP1.classList.add('intro-p');
    introP1.innerHTML = 'Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.';

    const introP2 = document.createElement('p');
    introP2.classList.add('intro-p');
    introP2.innerHTML = 'My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I\'ve also released an online video course that covers everything you need to know to build a web app with the Spotify API.';


    const introP3 = document.createElement('p');
    introP3.classList.add('intro-p');
    introP3.innerHTML = 'When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for korok seeds.'

    //append parragraphs to container.
    introContainer.appendChild(introP1);
    introContainer.appendChild(introP2);
    introContainer.appendChild(introP3);


    //append paragraph container to element
    element.appendChild(introContainer);

    //exprecience title
    const experienceTitle = document.createElement('h3');
    experienceTitle.innerHTML = 'EXPERIENCE';
    experienceTitle.classList.add('sub-title');
    experienceTitle.id = 'experience-title';
    element.appendChild(experienceTitle);

    //append experience to the right section.
    element.appendChild(experience());

    //project
    const projectTitle = document.createElement('h3');
    projectTitle.innerHTML = 'PROJECTS';
    projectTitle.classList.add('sub-title');
    projectTitle.id = 'project-title';
    element.appendChild(projectTitle);

    element.appendChild(projects())




    return element;
}

export default rightSection;