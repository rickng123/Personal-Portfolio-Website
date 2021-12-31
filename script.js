const images = ['./img/Profile1.png', './img/Profile2.png', './img/Profile3.png', './img/Profile4.png'  ]

function changeImage() {
  const randomNumber = Math.floor(Math.random()*images.length);
  var Image_ID = document.getElementById('getImage');
  Image_ID.src = images[randomNumber];
}
