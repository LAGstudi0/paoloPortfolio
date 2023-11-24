import _ from 'lodash';
import './style.css';
import contentLeft from './contentLeft';
import rightSection from './containerRight';


const content_Left = document.createElement('div');
content_Left.classList.add('left-section');
content_Left.appendChild(contentLeft());


const contentRight = document.createElement('div');
contentRight.classList.add('right-section');
contentRight.appendChild(rightSection());

document.body.appendChild(content_Left);
document.body.appendChild(contentRight);

const circleDiv = document.createElement('div');
circleDiv.classList.add('circle-div');

//add the circle as a background
document.body.addEventListener('mouseenter', () => {
    document.body.appendChild(circleDiv);
});

document.body.addEventListener('mousemove', (e) => {
//     // Calculate half of the width and height of the infoDiv
    var infoDivWidth = circleDiv.offsetWidth / -2;
    var infoDivHeight = circleDiv.offsetHeight / -2;

    // Update the position of the infoDiv based on the mouse coordinates and infoDiv dimensions
    var x = e.clientX - infoDivWidth;
    var y = e.clientY - infoDivHeight + window.scrollY; // Add scrollY only if your page can be scrolled vertically

    // Set the position of the infoDiv
    circleDiv.style.left = x + 'px';
    circleDiv.style.top = y + 'px';
});



// foodCell.addEventListener('mouseenter', function() {
//     // Add the infoDiv to the document body when the mouse enters the cell
//     document.body.appendChild(infoDiv);
// });

// foodCell.addEventListener('mousemove', function(e) {
//     // Calculate half of the width and height of the infoDiv
//     var infoDivWidth = infoDiv.offsetWidth / -2;
//     var infoDivHeight = infoDiv.offsetHeight / -2;

//     // Update the position of the infoDiv based on the mouse coordinates and infoDiv dimensions
//     var x = e.clientX - infoDivWidth;
//     var y = e.clientY - infoDivHeight + window.scrollY; // Add scrollY only if your page can be scrolled vertically

//     // Set the position of the infoDiv
//     infoDiv.style.left = x + 'px';
//     infoDiv.style.top = y + 'px';
// });

// foodCell.addEventListener('mouseleave', function() {
//     // Remove the infoDiv from the document body when the mouse leaves the cell
//     document.body.removeChild(infoDiv);
// });

