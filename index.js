const container = document.getElementById("container");

const bringImages = () => {
  const image = document.createElement("img");
  const link = "https://source.unsplash.com/random/200x200";
  image.src = link;
  container.appendChild(image);
};

for (let i = 0; i < 15; i++) {
  console.log(i);
  bringImages();
}

  