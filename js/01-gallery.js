import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
function renderGallery() {
  const galleryElement = document.querySelector('.gallery');

  galleryItems.forEach(item => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = item.preview;
    galleryImage.alt = item.description;
    galleryImage.setAttribute('data-source', item.original);

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    galleryElement.appendChild(galleryItem);
  });
}

// Open the modal window with the clicked image
function openModal(event) {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    const largeImageSrc = event.target.getAttribute('data-source');
    const instance = basicLightbox.create(`<img src="${largeImageSrc}">`);
    instance.show();
  }
}

// Attach event listener to the gallery
document.querySelector('.gallery').addEventListener('click', openModal);

// Render the gallery on page load
renderGallery();