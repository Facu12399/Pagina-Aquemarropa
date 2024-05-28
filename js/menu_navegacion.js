const catalogo = document.getElementById('catalogo');
const catalogo_desplegable = document.getElementById('catalogo-desplegable');

catalogo.addEventListener('mouseover', () => {
    catalogo_desplegable.style.display = 'flex';
});

catalogo_desplegable.addEventListener('mouseover', () => {
    catalogo_desplegable.style.display = 'flex';
});

catalogo.addEventListener('mouseout', () => {
    catalogo_desplegable.style.display = 'none';
});

catalogo_desplegable.addEventListener('mouseout', () => {
    catalogo_desplegable.style.display = 'none';
});
