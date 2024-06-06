const hamburguesa = document.getElementById('hamburguesa');
const menu_desplegable = document.getElementById('menu-desplegable');
// const catalogo = document.getElementById('catalogo');
// const catalogo_desplegable = document.getElementById('catalogo-desplegable');

hamburguesa.addEventListener('click', () => {
    if(menu_desplegable.style.display == 'flex'){
        menu_desplegable.style.display = 'none';
    } else{
        menu_desplegable.style.display = 'flex';
    }
})

