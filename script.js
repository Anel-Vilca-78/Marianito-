var header = document.getElementById('Header')

window.addEventListener('scroll', ()=>{
    
    var scroll = window.scrollY
    if(scroll>10){
    header.style.backgroundColor = '#94bf3f'
    }else{
    header.style.backgroundColor = '#94bf3f'
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