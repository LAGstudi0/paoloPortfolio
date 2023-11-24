function experience() {
    const element = document.createElement('div');
    element.classList.add('experience-container');
    element.id = 'experience-container'

    const experienceInfo = [
        {
            linkWeb: 'https://www.theodinproject.com/',
            date: '2023 - PRESENT' ,
            title: 'The Odin Project',
            description: 'A self taught community where you can learn full stack course',
            tags: [
                'Javascript', 'HTML', 'CSS', 'Webpack', 'GIT'
            ]
        },
        {
            linkWeb: '',
            date: 'JUNE - AUG 2023',
            title: 'Web Developer, Isoval',
            description: 'Crafted a website with HTML, CSS, and JavaScript, enhancing user experience and mobile traffic. Clear client communication ensured project success within budget constraints.',
            tags: [
                'Javascript', 'HTML', 'CSS'
            ]
        },
        {
            linkWeb: 'https://learn.microsoft.com/en-us/training/paths/get-started-c-sharp-part-1/',
            date: 'AUG 2023',
            title: 'Microsoft C# Course',
            description: 'Acquired C# proficiency, honed skills in Visual Studio for application development, and mastered object-oriented design with creative projects.',
            tags: ['C#']
        },
        {
            linkWeb: 'https://codewithmosh.com/p/complete-sql-mastery',
            date: 'SEPT 2023',
            title: 'Mosh SQL Course',
            description: 'Proficient in SQL querying, data manipulation, and analysis; skilled in SELECT statements, filtering, sorting, and aggregating complex datasets for actionable insights.',
            tags: ['SQL']
        },
    ]



        for (let i = 0; i < experienceInfo.length; i++) {

            // a element
            const linktoWeb = document.createElement('a');
            linktoWeb.classList.add('experience-link')
            linktoWeb.href = experienceInfo[i].linkWeb;

            //card container
            const cardExperience = document.createElement('div');
            cardExperience.classList.add('card-experience');

            //date container and rest of info container
            const dateContainer = document.createElement('div');
            dateContainer.classList.add('date-container');


            const restInfo = document.createElement('div');
            restInfo.classList.add('rest-info');

            //date
            const dateInfo = document.createElement('span');
            dateInfo.classList.add('date-info');
            dateInfo.innerHTML = experienceInfo[i].date;
            //append date to dateContainer
            dateContainer.appendChild(dateInfo);
            cardExperience.appendChild(dateContainer);

            //title
            const titleInfo = document.createElement('h3');
            titleInfo.classList.add('title-info');
            titleInfo.innerHTML = experienceInfo[i].title;
            restInfo.appendChild(titleInfo);

            //Description
            const descriptionInfo = document.createElement('p');
            descriptionInfo.classList.add('description-info');
            descriptionInfo.innerHTML = experienceInfo[i].description;
            restInfo.appendChild(descriptionInfo);

            //tag container
            const tagContainer = document.createElement('div');
            tagContainer.classList.add('tag-container');

            for (let j = 0; j < experienceInfo[i].tags.length; j++) {
                //tags
                const tagInfo = document.createElement('span');
                tagInfo.classList.add('tag-info');
                tagInfo.innerHTML = experienceInfo[i].tags[j] + ' ';
                tagContainer.appendChild(tagInfo);
            }
            restInfo.appendChild(tagContainer)
            cardExperience.appendChild(restInfo);
            linktoWeb.appendChild(cardExperience);
            element.appendChild(linktoWeb)


    }




    return element;
}



export default experience;