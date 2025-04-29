const loadCategories = async () => {
  try {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/phero-tube/categories`
    );
    const data = await response.json();
    displayCategories(data.categories);
  } catch (error) {
    console.log(error);
  }
};

const loadVideos = async () => {
  try {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/phero-tube/videos`
    );
    const data = await response.json();
    displayVideos(data.videos);
  } catch (error) {
    console.log(error);
  }
};

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories");

  categories.forEach((item) => {
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    categoriesContainer.appendChild(button);
  });
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");

  videos.forEach((video) => {
    console.log(video);
    
    const card = document.createElement("div");
    card.innerHTML = 
    `
    <div class="card bg-base-100">
  <figure>
    <img
      src= ${video.thumbnail} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `
    videoContainer.appendChild(card)
  });
};

loadCategories();
loadVideos();
