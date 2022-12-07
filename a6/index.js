
const { certificates, projects } = window;

let gitSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
let linkSvg = '<svg class="link-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.6 122.88" style="enable-background:new 0 0 122.6 122.88" xml:space="preserve"><g><path d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"/></g></svg>'

// when the content loads
document.addEventListener('DOMContentLoaded', function() {
    // adds all the event listeners into the DOM
    hoverEvents();
    buttonEvents();
    addData();
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
        document.querySelector('#skills-text-react').style.color = '#FF7597';
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
        document.querySelector('.linkedin-text').style.fill = '#FF7597';
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
        document.querySelector('.html-text').style.fill = '#b8abab';
        document.querySelector('#skills-text-html').style.color = '#FF7597';
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
        document.querySelector('.css-3').style.fill = '#b8abab';
        document.querySelector('#skills-text-css').style.color = '#FF7597';
        
    });
    //js
    document.querySelector('#js-svg').addEventListener('mouseenter' ,function() {
        document.querySelector('.js-1').style.fill = '#f0db4f';
        document.querySelector('.js-2').style.fill = '#fff';
        document.querySelector('#skills-text-js').style.color = '#f0db4f';
    });
    document.querySelector('#js-svg').addEventListener('mouseleave' ,function() {
        document.querySelector('.js-1').style.fill = '#233142';
        document.querySelector('.js-2').style.fill = '#b8abab';
        document.querySelector('#skills-text-js').style.color = '#FF7597';
    });
   
}

function buttonEvents() {
    let button = document.querySelector('#switch');
    button.onclick = function() {
        document.querySelector('.about-me').toggleAttribute('hidden');
        document.querySelector('.honesty').toggleAttribute('hidden');
    }
}

function addData() {
    for(let project of projects) {
        let figure = document.createElement('figure');
        let figureCaption = document.createElement('figcaption');
        let img = document.createElement('img');
        let aGit = document.createElement('a');
        let aLink = document.createElement('a');
        let clickDivs = document.createElement('div');

        figureCaption.innerHTML = project.title;
        img.src = project.img;
        img.style.width = '200px';
        img.alt = `img of the project of id number ${project.id}`;
        aGit.innerHTML = gitSvg;
        aGit.href = project.gitUrl;
        aGit.target= "_blank";
        aLink.innerHTML = linkSvg;
        aLink.href = project.url;
        aLink.target= "_blank";

        clickDivs.appendChild(aGit);
        clickDivs.appendChild(aLink);
        figure.appendChild(figureCaption);
        figure.appendChild(img);
        figure.appendChild(clickDivs);
        document.querySelector('.project-container').appendChild(figure);
    }

    for (let certificate of certificates) {
        let figure = document.createElement('figure');
        let figureCaption = document.createElement('figcaption');
        let img = document.createElement('img');
        let a = document.createElement('a');
        let p = document.createElement('p');

        img.src = `img/c${certificate.id}.png`;
        img.style.width = '200px';
        figureCaption.innerHTML = certificate.title;
        p.innerHTML = certificate.institution;

        a.appendChild(img);
        a.appendChild(figureCaption);
        a.appendChild(p);
        a.href = certificate.link;
        figure.appendChild(a);

        document.querySelector('.certificate-container').appendChild(figure);
    }
}