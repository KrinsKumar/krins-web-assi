/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Krinskumar Bhaveshkumar Vaghasia
 *      Student ID:  169722212
 *      Date:       4-11-22
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

function main() {
  console.log({ products, categories }, "Store Data");
  categories.forEach(addCategories); // adds the buttons for categories
  document.querySelectorAll(`button`).forEach(buttonClicked); // when a button from nav is clicked
  document.querySelector(`button`).click(); // clicks the first button
}

addEventListener("DOMContentLoaded", main);

// functions ------------------------------------------------------------------------

function addCategories(element) {
  // adds the buttons for categories
  let catButton = document.createElement(`button`);
  let catImage = document.createElement(`img`);
  let catPara = document.createElement(`p`);
  let id = element.id;

  // creates and appends the icon
  catImage.src = `img/${id}.svg`;
  catImage.alt = `${id} icon`;
  catImage.width = `60`;
  catImage.classList.add(`button-image`);
  catButton.appendChild(catImage);

  // creates and appends the text
  catPara.innerHTML = element.description;
  catButton.appendChild(catPara);
  catButton.id = id;

  // appends the whole button into the DOM
  document.querySelector(`#category-menu`).appendChild(catButton);
}

function buttonClicked(button) {
  // when a button from nav is clicked
  button.addEventListener(`click`, function (e) {
    // updates the h1 element
    let buttonClicked = e.target.id;
    document.querySelector(`#category`).innerHTML = `${e.target.textContent}`;
    if (e.target.tagName === `IMG`) {
      let text = e.composedPath()[1];
      document.querySelector(`#category`).innerHTML = `${text.textContent}`;
      buttonClicked = text.id;
    }
    if (e.target.tagName === `P`) {
      buttonClicked = e.composedPath()[1].id;
    }

    // // removes everything from the table to update
    // let tableBody = document.querySelector(`#products`);
    // tableBody.innerHTML = ``;

    // filters the list which are not discounted
    let filteredProducts = products.filter(function (product) {
      let flag1 = !product.discontinued;
      let flag2 = product.categories.includes(`${buttonClicked}`);
      return flag1 && flag2;
    });

    // adds the cards dynamically
    for (let product of filteredProducts) {
      // creates new elements
      let cardDiv = document.createElement('div');
      let img = document.createElement('img');
      let textDiv = document.createElement('div');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let span = document.createElement('span');

      span.innerHTML = product.price;
      p.innerHTML = product.description;
      p.appendChild(span);
      h2.innerHTML = product.name;
      textDiv.appendChild(h2);
      textDiv.appendChild(p);
      textDiv.classList.add(`card-text`);
      img.src = product.imageUrl;
      img.alt = 'photo of a keyboard';
      cardDiv.appendChild(img);
      cardDiv.appendChild(textDiv);
      cardDiv.classList.add(`card`);
      document.querySelector('.card-container').appendChild(cardDiv);

    }

    // // updates the table for the specific section
    // for (let product of filteredProducts) {
    //   let newRow = document.createElement(`tr`);
    //   let newName = document.createElement(`td`);
    //   newName.innerHTML = product.name;
    //   newName.classList.add(`table-01`);

    //   let newDesc = document.createElement(`td`);
    //   newDesc.innerHTML = product.description;
    //   newDesc.classList.add(`table-02`);

    //   let newPrice = document.createElement(`td`);
    //   let price = product.price;
    //   price = (price / 100).toFixed(2);

    //   newPrice.innerHTML = `$` + price;
    //   newPrice.classList.add(`table-03`);

    //   newRow.appendChild(newName);
    //   newRow.appendChild(newDesc);
    //   newRow.appendChild(newPrice);

    //   // onclick in the row
    //   newRow.onclick = function () {
    //     let message = product.name + `- ` + product.description + ` AT $` + price;
    //     console.log(message);
    //   };

    //   tableBody.appendChild(newRow);
    // }
  });
}

// function addTableHeader() {
//   let tableBody = document.querySelector(`#table-header`);

//   let newRow = document.createElement(`tr`);
//   let newName = document.createElement(`td`);
//   newName.innerHTML = `Name`;
//   newName.classList.add(`header-01`);

//   let newDesc = document.createElement(`td`);
//   newDesc.innerHTML = `Description`;
//   newDesc.classList.add(`header-02`);

//   let newPrice = document.createElement(`td`);
//   newPrice.innerHTML = `Price`;
//   newPrice.classList.add(`header-03`);

//   newRow.appendChild(newName);
//   newRow.appendChild(newDesc);
//   newRow.appendChild(newPrice);

//   tableBody.appendChild(newRow);
// }
