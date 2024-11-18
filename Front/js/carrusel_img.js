// let imgCarrusel = document.querySelector('.img-carrusel');
// let slide = document.querySelector('.slide')

/*
const carrusel = document.querySelector('.img-carrusel');

const flechaLeft = document.querySelector('#left');
const flechaRight = document.querySelector('#right');

flechaLeft.addEventListener('click', () => {
    carrusel.style.transform = 'translateX(0%)';
})

flechaRight.addEventListener('click', () => {
    carrusel.style.transform = 'translateX(-100%)';
})*/

const carrusel = document.querySelector('.img-carrusel'); 
const flechaLeft = document.querySelector('#left'); 
const flechaRight = document.querySelector('#right'); 

let currentIndex = 0; 
const totalImages = 3; // Número total de imágenes en el carrusel 

flechaLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; 
    updateCarrusel(); 
}) 

flechaRight.addEventListener('click', () => { 
    currentIndex = (currentIndex + 1) % totalImages; 
    updateCarrusel(); 
}) 

function updateCarrusel() { 
    const translateX = -currentIndex * 100; 
    carrusel.style.transform = `translateX(${translateX}%)`; 
}