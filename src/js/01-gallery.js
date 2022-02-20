
import SimpleLightbox from  'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line

import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector(`.gallery`);

const imageMarkup = createImageItem(galleryItems);

container.insertAdjacentHTML(`beforeend`, imageMarkup);

container.addEventListener(`click`, onClick);

function createImageItem(item) {
   return item
        .map(({ preview, original, description }) => {
        return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`
})
        .join(``);
}
 
function onClick(evt) { 
     evt.preventDefault();
    if (!evt.target.classList.contains(`gallery__image`)) {
        return;
    }
    let lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: "alt",
        // captionPosition: `top`,
        

    });

 }

// console.log(galleryItems);
