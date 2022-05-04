import { renderMeal, displayMeals } from './utils.js';

const ingredientsForm = document.getElementById('ingredients-form');
const ingredientList = document.getElementById('ingredient-list');
const finishedMeals = document.getElementById('meals');
const ingredientInput = document.getElementById('ingredient-input');
const quantityInput = document.getElementById('quantity-input');
const servingSize = document.getElementById('serving-size');
const ingredientButton = document.getElementById('add-ingredient-button');
const removeButton = document.getElementById('remove');
const nameOfMeal = document.getElementById('name-of-meal');
const saveMealButton = document.getElementById('save-meal');

let ingredient = [];
let meal = [];

ingredientsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('submitting the form');

    const ingredientData = new FormData(ingredientsForm);
    // console.log(ingredientData.get('Ingredient'));
    // console.log(ingredientData.get('Quantity'));

    let ingredientQuantity = {
        ingredient: ingredientData.get('Ingredient'),
        quantity: ingredientData.get('Quantity'),
        type: ingredientData.get('Measurement'),
    };
    ingredient.push(ingredientQuantity);
    // console.log('list of ingredients and quantity', ingredient);

    renderMeals();
    ingredientsForm.reset();
});

removeButton.addEventListener('click', () => {
    ingredient.pop();
    renderMeals();
});

saveMealButton.addEventListener('click', () => {
    console.log('saving meal');
    // const name = nameOfMeal.value;
    // const count = ingredient.length;
    // meal.push({ name, count });
    // displayMeals();
    // resetIngredients();
});

function renderMeals() {
    ingredientList.textContent = ' ';
    for (let ingredientData of ingredient) {
        const li = renderMeal(ingredientData);
        ingredientList.append(li);
    }
}