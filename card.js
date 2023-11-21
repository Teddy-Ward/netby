let card = document.querySelector('.card');

document.addEventListener('mousemove', function(e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 75;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});