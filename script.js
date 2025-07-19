const images = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg'
];

let current = 0;

const imgElement = document.getElementById('slider-image');
const counter = document.getElementById('counter');
const total = images.length;

function updateSlider() {
  imgElement.src = images[current];
  counter.textContent = `Изображение ${current + 1} из ${total}`;
}

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % total;
  updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + total) % total;
  updateSlider();
});
