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

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById('categories');

  categories.forEach((item) => {
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    categoriesContainer.appendChild(button)
  });
};

loadCategories();
