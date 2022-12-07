document.querySelector('#other').oninput = function(e) {
    document.querySelector('.other-selected').hidden = false;
    document.querySelector('.other-selected-label').hidden = false;
}
document.querySelector('#job').oninput = function(e) {
    document.querySelector('.other-selected').hidden = true;
    document.querySelector('.other-selected-label').hidden = true;
}
document.querySelector('#school').oninput = function(e) {
    document.querySelector('.other-selected').hidden = true;
    document.querySelector('.other-selected-label').hidden = true;
}