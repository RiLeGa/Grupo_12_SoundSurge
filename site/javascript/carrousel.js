new Glider(document.querySelector('.carrousel__container'), {
    slidesToShow: 1,
    dots: '#dots',
    draggable: true,
    arrows: {
      prev: '.carousel-anterior',
      next: '.carousel-siguiente'
    }
  });