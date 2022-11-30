/*
    todo list

    skills
    about
    certifications
    projects
    handles in the footer
    contact me.

    console.log(1)
*/


// when the content loads
document.addEventListener('DOMContentLoaded', function() {
    // adds all the event listeners into the DOM
    createListeners();
})


// functions 
function createListeners() {
    hoverEvents();  // adds all the hover events
}


function hoverEvents() {
    // react svg
    document.querySelector('#react-svg').addEventListener('mouseenter' ,function() {
        document.querySelector('.react-st1').style.fill = '#00d8ff';
        document.querySelectorAll('.react-st2').forEach(function(element) {element.style.stroke = '#00d8ff';})
        document.querySelector('.skills-text').style.color = '#00d8ff';
    });
    document.querySelector('#react-svg').addEventListener('mouseleave' ,function() {
        document.querySelector('.react-st1').style.fill = '#233142';
        document.querySelectorAll('.react-st2').forEach(function(element) {element.style.stroke = '#233142';})
        document.querySelector('.skills-text').style.color = '#233142';
    });

    //github 
    document.querySelector('#git-svg').addEventListener('mouseenter' ,function() {
        document.querySelector('.git-stroke').style.fill = '#000000';
     });
    document.querySelector('#git-svg').addEventListener('mouseleave' ,function() {
        document.querySelector('.git-stroke').style.fill = '#233142';
    });

}