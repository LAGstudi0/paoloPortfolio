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
    introP1.innerHTML = 'Back in 2015 I decided to start my coding journey by joining to a coding competition with some friends, that we ended up winning. Going through the development process I tumbled head first into the rabbit hole of coding and user interface. Fast forward to today, and I’ve had the privilege of building software for small business and managed to complete a Computer Science bachelors degree.';

    const introP2 = document.createElement('p');
    introP2.classList.add('intro-p');
    introP2.innerHTML = 'My main focus these days is gaining more experience in order to produce a better quality code. In my free time I also like to work in my own projects in order to express my creativity and enhance my knowledge.';


    const introP3 = document.createElement('p');
    introP3.classList.add('intro-p');
    introP3.innerHTML = 'When I’m not at the computer, I’m usually playing football, hanging out with my girlfriend or thinking about code.'

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