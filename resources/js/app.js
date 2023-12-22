// Search functionality
const searchBtn = document.querySelector(".search-btn");
const searchContent = document.querySelector(".search-content");
const meal = document.querySelector(".meal");

searchBtn.addEventListener("click", function () {
    let inputText = searchContent.value.trim();
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + inputText)
        .then((response) => response.json())
        .then((data) => {
            let createMeal = "";
            if (data.meals) {
                data.meals.map((item) => {
                    const { strMeal, strMealThumb, idMeal } = item;
                    createMeal += `<div data-id="${idMeal}" class="meal-item"> 
                            <img src="${strMealThumb}" alt=""> 
                            <h2 class="meal-name">${strMeal}</h2> 
                            <button class="getRecipe-btn">Get Recipe</button>
                        </div>`;
                });
                meal.classList.remove("notFound");
            } else {
                createMeal = "Sorry, we didn't find any meal!";
                meal.classList.add("notFound");
            }
            meal.innerHTML = createMeal;
        });
});

// Meal details functionality
const mealDetails = document.querySelector(".meal-details");
const mealDetailsContent = document.querySelector(".meal-details-content");

meal.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("getRecipe-btn")) {
        let mealItem = e.target.parentElement;
        fetch(
            "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
                mealItem.dataset.id
        )
            .then((response) => response.json())
            .then((data) => {
                let createMealDetail = "";
                data.meals.map((item) => {
                    const {
                        strMeal,
                        strMealThumb,
                        strCategory,
                        strInstructions,
                        strYoutube,
                    } = item;
                    createMealDetail += `<h2 class="recipeName">${strMeal}</h2>
                         <p class="recipeCategory">${strCategory}</p>
                         <div class="recipeText">
                            <h3>Instructions:</h3>
                            <p>${strInstructions}</p>
                         </div>
                         <div class="recipeImg"><img src="${strMealThumb}" alt=""></div>
                         <div class="recipeLing"><a href="${strYoutube}" target="_blank">Watch Video</a></div>`;
                });
                mealDetailsContent.innerHTML = createMealDetail;
                mealDetails.classList.add("active");
            });
    }
});

// Close button for meal details
let closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function () {
    mealDetails.classList.remove("active");
});
