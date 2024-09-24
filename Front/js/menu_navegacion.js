const catalogo = document.getElementById('catalogo');
const catalogo_desplegable = document.getElementById('catalogo-desplegable');

// catalogo.addEventListener('mouseover', () => {
//     catalogo_desplegable.style.display = 'flex';
// });

catalogo.addEventListener('click',()=>{
    if(catalogo_desplegable.style.display == 'flex'){
        catalogo_desplegable.style.display = 'none';
    } else{
        catalogo_desplegable.style.display = 'flex';
    }
})
