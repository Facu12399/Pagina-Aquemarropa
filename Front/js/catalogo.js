// const animacion = document.getElementById('desplegue');
const elemento = document.getElementById('list-item');
const flechita = document.getElementById('angle');
const catalogo = document.getElementById('catalogo-desplegable')
let clic = false;

elemento.addEventListener('click', (e) => { 
    e.preventDefault();
    if (catalogo.style.display = 'none' && clic == false) {
        flechita.style.transform = 'rotate(180deg)';
        setTimeout(() => { catalogo.style.opacity = 1;})
        clic = true;
    } else {
        flechita.style.transform = 'rotate(0deg)';
        setTimeout(() => { catalogo.style.opacity = 0;})
        clic = false;
    }
})

flechita.addEventListener('click', (e) => { 
    e.preventDefault();
    if (catalogo.style.display = 'none' && clic == false) {
        flechita.style.transform = 'rotate(180deg)';
        setTimeout(() => { catalogo.style.opacity = 1;})
        clic = true;
    } else {
        flechita.style.transform = 'rotate(0deg)';
        setTimeout(() => { catalogo.style.opacity = 0;})
        clic = false;
    }
})

/*
elemento.addEventListener('click', ()=>{
    if(clic == false){
        flechita.style.transform = 'rotate(180deg)';
        catalogo.style.display = 'flex';
        clic = true;
    } else{
        flechita.style.transform = 'rotate(0deg)';
        clic = false;
    }
})*/