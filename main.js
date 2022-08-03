const menuCookie = document.getElementById('menuCookie');
const boxCookie = document.getElementsByTagName('body')[0];
menuCookie.addEventListener('click', function () {
  boxCookie.classList.add('none-cookie');
});
const slidingPanel = document.getElementById('slidingPanel');
const slidingX = document.getElementById('slidingX');
slidingX.addEventListener('click', function () {
  slidingPanel.classList.add('slidingx');
});
