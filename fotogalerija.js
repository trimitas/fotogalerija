
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const gallery = document.querySelector(".gallery");




const rezultatas = async (cat) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${cat}&client_id=U2lqXWY1sreTyikBYbskUgrJrFzQ9naJx6_6bGCpHf4`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};


async function getRandomPhotos() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=U2lqXWY1sreTyikBYbskUgrJrFzQ9naJx6_6bGCpHf4&count=15`
  );
  const data = await response.json();
  return data;
}


function displayPhotos(photos) {
    const count = photos.length;
    gallery.innerHTML = "";
    for (let i = 0; i < 15; i++) {
      const img = document.createElement("img");
      img.src = photos[i].urls.regular;
      img.alt = photos[i].alt_description;
      gallery.appendChild(img);
    }
  }



getRandomPhotos().then(displayPhotos);


searchButton.addEventListener("click", async () => {
    const cat = searchInput.value;
    const searchResults = await rezultatas(cat);
    displayPhotos(searchResults);
  });


