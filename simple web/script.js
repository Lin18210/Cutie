function showLove() {
  alert("You are loved! 💖 Have a lovely day! 🌼");
}

// Dynamically load images from /images/img1.jpg to img12.jpg
const imageContainer = document.getElementById('imageContainer');

for (let i = 1; i <= 12; i++) {
  const img = document.createElement('img');
  img.src = `assets/bon${i}.jpeg`; 
  img.alt = `Cute Image ${i}`;
  imageContainer.appendChild(img);
}
