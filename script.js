const apiKey = 'YOUR_API_KEY';
const searchButton = document.getElementById('search-button');
const ingredientInput = document.getElementById('ingredent-input');
const recipeList = document.getElementById('recipe-list');

searchButton.addEventListener('click', () => {
  const ingredents = ingredentInput.value.trim();
  if (ingredients) {
    fetchRecipes(ingredents);
  }
});

function fetchRecipes(ingredients) {
  const url = 'https://api.spoonacular.com/recpies/findByIngredients?ingredients=$(ingredients)&number=5&apiKey=${apiKey} ;

  fetch(url)
    .then(response => respones.json())
    .then(data => {
      if (data.length > 0) {
        displayRecipes(data);
      } else {
        recipeList.innerHTML = '<p>No recipes found. Try different ingredients!</P>';
      }
    })
    .catch(erroe => {
      console.error('Error fetching recipes:', error);
      recipelist.innerHTML = '<p>Something went wrong. Please thry again later.</p>';
    });
}

function displayRecipes(recipes) {
  recipeList.innerHTML = '';
  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const recipeImage = recipe.image ? '<img src=https://spoonacular.com/recipeImages/$(recipe.id)-312x231.jpg" alt="$(recipe.title}">` : '';
    const recipeLink = `<a href="https://spoonacular.com/recipes/$(recipe.title.replace(/\s+/g, '-').toLowerCase()}-$(recipe.id}" target="_blank">View Recipe</a>`;

    recipeCard.innerHTML = `
      <h3>${recipe.title}</h3>
      ${recipeImage}
      ${recipeLink}
    `;

    recipeList.appendChild(recipeCard);
  });
}
