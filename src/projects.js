import ProIcon1 from './projectImages/project1.png';
import ProIcon2 from './projectImages/project2.png';
import ProIcon3 from './projectImages/project3.png';


function projects() {
    const element = document.createElement('div');
    element.classList.add('projects-container')
    element.id = 'projects-container';

    const projectArray = [
        {
            linkWeb: 'https://lagstudi0.github.io/MusicPlayerWebsite/',
            iconSource: ProIcon1,
            title: 'Music Player',
            description: 'Basic music player with two songs'
        },
        {
            linkWeb: 'https://lagstudi0.github.io/quoteWebsite/',
            iconSource: ProIcon2,
            title: 'Quote Generator',
            description: 'Website that uses API in order to generate quotes'
        },
        {
            linkWeb: 'https://lagstudi0.github.io/ticTacToe/',
            iconSource: ProIcon3,
            title: 'Tic Tac Toe',
            description: 'A simple Tic Tac Toe game'
        }
    ]

    for (let i = 0; i < projectArray.length; i++) {

        const linktoWeb = document.createElement('a');
        linktoWeb.href = projectArray[i].linkWeb;
        linktoWeb.classList.add('project-link')

        //card container
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        //left and right container
        const leftSide = document.createElement('div');
        leftSide.classList.add('left-side');
        const rightSide = document.createElement('div');
        rightSide.classList.add('right-side');


        //icon
        const iconProject = new Image();
        iconProject.classList.add('icon-project');
        iconProject.src = projectArray[i].iconSource;
        leftSide.appendChild(iconProject);

        //title
        const projectTitle = document.createElement('h3');
        projectTitle.classList.add('project-title');
        projectTitle.innerHTML = projectArray[i].title;
        rightSide.appendChild(projectTitle);

        //description
        const projectDescription = document.createElement('p');
        projectDescription.classList.add('project-description');
        projectDescription.innerHTML = projectArray[i].description;
        rightSide.appendChild(projectDescription);

        //append to sides to container
        projectCard.appendChild(leftSide);
        projectCard.appendChild(rightSide);

        linktoWeb.appendChild(projectCard);
        element.appendChild(linktoWeb);



    }

    return element;
}

export default projects;