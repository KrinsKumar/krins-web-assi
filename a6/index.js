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
    hoverEvents();
})


// functions 




function hoverEvents() {
    // react svg
    document.querySelector('#react-svg').addEventListener('mouseenter' ,function() {
        document.querySelector('.react-st1').style.fill = '#00d8ff';
        document.querySelectorAll('.react-st2').forEach(function(element) {element.style.stroke = '#00d8ff';})
        document.querySelector('#skills-text-react').style.color = '#00d8ff';
    });
    document.querySelector('#react-svg').addEventListener('mouseleave' ,function() {
        document.querySelector('.react-st1').style.fill = '#233142';
        document.querySelectorAll('.react-st2').forEach(function(element) {element.style.stroke = '#233142';})
        document.querySelector('#skills-text-react').style.color = '#233142';
    });
    //github 
    document.querySelector('#git-svg').addEventListener('mouseenter' ,function() {
        document.querySelector('.git-stroke').style.fill = '#ffffff';
     });
    document.querySelector('#git-svg').addEventListener('mouseleave' ,function() {
        document.querySelector('.git-stroke').style.fill = '#233142';
    });
    // linkedin
    document.querySelector('#linkedin-svg').addEventListener('mouseenter' ,function() {
        document.querySelector('.linkedin-stroke').style.fill = '#0E76A8';
        document.querySelector('.linkedin-text').style.fill = '#FFFFFF';
    });
    document.querySelector('#linkedin-svg').addEventListener('mouseleave' ,function() {
        document.querySelector('.linkedin-stroke').style.fill = '#233142';
        document.querySelector('.linkedin-text').style.fill = '#757575';
    });
    //html 
    document.querySelector('#html-svg').addEventListener('mouseenter' ,function() {
        document.querySelector('.html-1').style.fill = '#e34f26';
        document.querySelector('.html-2').style.fill = '#ef652a';
        document.querySelector('.html-text').style.fill = '#FFFFFF';
        document.querySelector('#skills-text-html').style.color = '#ef652a';
    });
    document.querySelector('#html-svg').addEventListener('mouseleave' ,function() {
        document.querySelector('.html-1').style.fill = '#233142';
        document.querySelector('.html-2').style.fill = '#2c3e53';
        document.querySelector('.html-text').style.fill = '#757575';
        document.querySelector('#skills-text-html').style.color = '#233142';
    });
    //css 
    document.querySelector('#css-svg').addEventListener('mouseenter' ,function() {
        document.querySelector('.css-1').style.fill = '#1b73ba';
        document.querySelector('.css-2').style.fill = '#1c88c7';
        document.querySelector('.css-3').style.fill = '#fff';
        document.querySelector('#skills-text-css').style.color = '#1c88c7';
    });
    document.querySelector('#css-svg').addEventListener('mouseleave' ,function() {
        document.querySelector('.css-1').style.fill = '#233142';
        document.querySelector('.css-2').style.fill = '#2c3e53';
        document.querySelector('.css-3').style.fill = '#757575';
        document.querySelector('#skills-text-css').style.color = '#233142';
        
    });
    //js
    document.querySelector('#js-svg').addEventListener('mouseenter' ,function() {
        document.querySelector('.js-1').style.fill = '#f0db4f';
        document.querySelector('.js-2').style.fill = '#fff';
        document.querySelector('#skills-text-js').style.color = '#f0db4f';
    });
    document.querySelector('#js-svg').addEventListener('mouseleave' ,function() {
        document.querySelector('.js-1').style.fill = '#233142';
        document.querySelector('.js-2').style.fill = '#757575';
        document.querySelector('#skills-text-js').style.color = '#233142';
    });
   
}