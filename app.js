import { renderMeal, } from './utils.js';

// import functions and grab DOM elements
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

// let state
let ingredient = [];
let meal = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
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
});

function renderMeals() {
    ingredientList.textContent = ' ';
    for (let ingredientData of ingredient) {
        const li = renderMeal(ingredientData);
        ingredientList.append(li);
    }
}