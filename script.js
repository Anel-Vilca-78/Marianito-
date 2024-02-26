var header = document.getElementById('Header')

window.addEventListener('scroll', ()=>{
    
    var scroll = window.scrollY
    if(scroll>10){
    header.style.backgroundColor = 'rgb(200, 230, 7)'
    }else{
    header.style.backgroundColor = 'rgb(200, 230, 7)'
    }
})


document.addEventListener('DOMContentLoaded', (event) => {
    let current = 0;
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    // Función para actualizar el carrusel
    function updateCarousel() {
        images.forEach((img, index) => {
            img.classList.remove('active');
        });
        images[current].classList.add('active');
    }

    // Inicializa el carrusel
    updateCarousel();

    // Cambia a la siguiente imagen cada 3 segundos
    setInterval(() => {
        current = (current + 1) % totalImages;
        updateCarousel();
    }, 3000);
});