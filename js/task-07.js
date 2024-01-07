const slider = document.getElementById('font-size-control');
const spanAbracadabra = document.getElementById('text');

slider.addEventListener('input', function() {
  const fontSize = slider.value;
  spanAbracadabra.style.fontSize = `${fontSize}px`;
});