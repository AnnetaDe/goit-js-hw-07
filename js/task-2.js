const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  }
];




const gallery = document.querySelector('.gallery');
const imgItem = document.querySelector('.img-item');
const createGallery = images.map(image => {
  return `<li class="img-item"><img class = "image" src = ${image.url} alt="${image.alt}" height = "300" width = "360"></li>`;
}).join('');
gallery.style.display = 'flex';
gallery.style.listStyle = 'none';
gallery.style.padding = '100px 156px';
gallery.style.gap = '24px';
gallery.insertAdjacentHTML('afterbegin', createGallery);

const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);
container.appendChild(gallery);


const scriptFile = document.querySelector("body > script:nth-child(2)");
document.body.insertBefore(container, scriptFile);
container.style.maxWidth = '1400px';
container.style.display = 'block';
