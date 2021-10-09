const images = ['image1.png','image2.jpeg','image3.jpeg']

const chosenImage = images[Math.floor(Math.random() * images.length)]



const $backgroundImage = document.createElement('img')

$backgroundImage.src = `img/${chosenImage}`

document.body.appendChild($backgroundImage)