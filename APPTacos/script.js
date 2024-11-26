document.getElementById('download-button').addEventListener('click', function() {
    alert('¡Gracias por descargar nuestra aplicación!');
    window.location.href = 'url-de-descarga-de-tu-aplicación'; // Cambia por la URL de descarga
  });
  
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  const totalSlides = slides.length;
  
  // Función para mover el carrusel automáticamente
  function moveCarousel() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }
  
  // Función para actualizar el carrusel y los indicadores
  function updateCarousel() {
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Cambiar cada 5 segundos
  setInterval(moveCarousel, 5000);
  
  // Manejo del clic en los indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });
  