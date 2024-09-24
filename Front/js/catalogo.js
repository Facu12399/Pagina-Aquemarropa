const animacion = document.getElementById('desplegue');
const elemento = document.getElementById('agrandar');
const flechita = document.getElementById('angle');
let clic = false;

elemento.addEventListener('click', ()=>{
    if(clic == false){
        flechita.style.transform = 'rotate(180deg)';
        animacion.style.transition = 'display 0.5s ease-in-out';
        clic = true;
    } else{
        flechita.style.transform = 'rotate(0deg)';
        animacion.style.transition = 'display 0.5s ease-in-out';
        clic = false;
    }
})