function getTimeString(time) {
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  const minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}

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
    const card = document.createElement("div");
    card.innerHTML = `

    <div class="card bg-base-100">
  <figure class="h-[180px] relative">
    <img class="h-full w-full object-cover"
      src=${video.thumbnail} />
    
      ${
        video.others.posted_date.length === 0
          ? ""
          : `<span class="absolute right-2 bottom-2 bg-black rounded px-1 text-white text-xs">${getTimeString(
              video.others.posted_date
            )}</span>`
      }
  </figure>

  <div class="px-0 py-2 flex gap-2">
    <div>
      <img class="w-10 h-10 rounded-full object-cover" src="${
        video.authors[0].profile_picture
      }"/>
    </div>
    <div>
      <h2 class="font-bold">${video.title}</h2>

      <div class="flex items-center gap-2">
        <p class="text-sm text-gray-500">${video.authors[0].profile_name}</p>

        ${
          video.authors[0].verified === true
            ? `<img class="w-5" src="assets/verified.png"/>`
            : ""
        }
      </div> 
    </div>

  </div>
</div>
    `;
    videoContainer.appendChild(card);
  });
};

loadCategories();
loadVideos();
