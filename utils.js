export function renderMeal(ingredientData) {
    console.log('hello from utils.js');
    console.log(ingredientData);
    const mealLi = document.createElement('li');
    mealLi.textContent = `${ingredientData.quantity} ${ingredientData.type} of ${ingredientData.ingredient}`;
    return mealLi;
}

export function displayMeals(meals) {
    const li = document.createElement('li');
    li.textContent = `${meals.name} - ${meals.count} ingredients `;
    return li;
}