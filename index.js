import { images } from "./imagesDataset.js";

let main = document.querySelector(".container");
let count = 0;

class Album {
  constructor(sorce, title) {
    this.sorce = sorce;
    this.title = title;
  }

  createPhoto() {
    let article = document.createElement("article");
    article.classList.add("image");
    if (count === 0) {
      article.classList.add("active");
    }

    count++;
    article.style.backgroundImage = `url(${this.sorce})`;

    let h3 = document.createElement("h3");
    h3.innerHTML = this.title;

    article.appendChild(h3);

    main.appendChild(article);
  }

  active() {
    const image = document.querySelectorAll(".image");

    image.forEach((img) => {
      img.addEventListener("click", () => {
        this.removeActive();
        img.classList.add("active");
      });
    });
  }

  removeActive() {
    const image = document.querySelectorAll(".image");
    image.forEach((img) => {
      img.classList.remove("active");
    });
  }
}

function run() {
  images.forEach((img) => {
    const photo = new Album(img.src, img.title);
    photo.createPhoto();
    photo.active();
  });
}

run();
