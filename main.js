const displayedImage = document.querySelector('.displayed-img'),
  thumbBar = document.querySelector('.thumb-bar'),
  btn = document.querySelector('button'),
  overlay = document.querySelector('.overlay');

for (let i = 1; i < 6; i++) {
  let img = 0;
  img += i;
  var newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${img}.jpg`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', (e) => {
    const target = e.target;
    const srcVal = target.getAttribute('src');
    console.log(srcVal);
    displayedImage.setAttribute('src', srcVal);

  });
}
btn.textContent = 'dark';

function switchBg() {
  if (btn.classList.contains('dark')) {
    btn.classList.remove('dark');
    btn.textContent = 'light';
    overlay.style.backgroundColor = ' rgba(0,0,0,0.5)';
  } else {
    btn.classList.add('dark');
    btn.textContent = 'dark';
    overlay.style.backgroundColor = ' rgba(0,0,0,0)';
  }
}
btn.addEventListener('click', switchBg);






/* Wiring up the Darken/Lighten button */

