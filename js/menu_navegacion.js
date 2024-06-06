if (screen.width < 600) {
    const hamburguesa = document.getElementById('hamburguesa');
    const menu_desplegable = document.getElementById('menu-desplegable');
    // const catalogo = document.getElementById('catalogo');
    // const catalogo_desplegable = document.getElementById('catalogo-desplegable');

    hamburguesa.addEventListener('click', () => {
        if(menu_desplegable.style.display == 'flex'){
            menu_desplegable.style.display = 'none';
        } else{
            menu_desplegable.style.display = 'flex';
            const catalogo = document.getElementById('catalogo');
            const catalogo_desplegable = document.getElementById('catalogo-desplegable');

            catalogo.addEventListener('click', ()=>{
                if(catalogo_desplegable.style.display == 'flex'){
                    catalogo_desplegable.style.display = 'none';
                } else{
                    catalogo_desplegable.style.display = 'flex';
                }
            })
        }
})
} else {
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
}