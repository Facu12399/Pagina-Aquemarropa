const elemento = document.getElementById('agrandar');
let clic = false;

elemento.addEventListener('click', ()=>{
    const animacion = document.getElementById('angle');
    if(clic == false){
        animacion.style.transform = 'rotate(180deg)';
        animacion.style.transition = 'transform 0.2s ease-in-out';
        clic = true;
    } else{
        animacion.style.transform = 'rotate(0deg)';
        animacion.style.transition = 'transform 0.2s ease-in-out';
        clic = false;
    }
})