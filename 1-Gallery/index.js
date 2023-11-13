const imgs = document.querySelectorAll('.my-btn');
const myImg = document.querySelector('#main-img');

imgs.forEach((img) => {
  img.addEventListener('click', function () {
    imgs.forEach((item) => {
      item.classList.remove('active');
    });
    const alterImg = img.src;
    myImg.src = alterImg;
    this.classList.add('active');
  });
});
