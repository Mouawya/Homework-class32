'use strict';

/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/
document.body.style.fontFamily = 'Arial, sans-serif';
const nickname = document.querySelector('#nickname');
nickname.textContent = 'Mouawya';
const favFood = document.querySelector('#fav-food');
favFood.textContent = 'Pasta';
const homeTown = document.querySelector('#hometown');
homeTown.textContent = 'Judaydt Artoz';

const list = document.querySelectorAll('li');
list.forEach((li) => {
  li.className = 'list-item';
});
