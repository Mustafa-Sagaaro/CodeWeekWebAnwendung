fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    if (data.meals) {
      const meal = data.meals[0];
      console.log(meal.strMeal); // Ausgabe des Namens des Gerichts
      console.log(meal.strMealThumb); // Ausgabe des Bild-URLs des Gerichts
    } else {
      console.log("No meal found with that name.");
    }
  })
  .catch(error => {
    console.log(error);
  });
  fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52959')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    if (data.meals) {
      const meal = data.meals[0];
      console.log(meal.strMeal); // Ausgabe des Namens des Gerichts
      console.log(meal.strMealThumb); // Ausgabe des Bild-URLs des Gerichts
    } else {
      console.log("No meal found with that ID.");
    }
  })
  .catch(error => {
    console.log(error);
  });


  const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

function randomizeRezepte() {
  fetch(API_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let rezepte = data.meals;
      let output = "";

      for (let i = 0; i < rezepte.length; i++) {
        output += `
      <h2>Rezept</h2>
      <p>Name: ${rezepte[i].strMeal}</p>
      <p>Kategorie: ${rezepte[i].strCategory}</p>
      <p>Beschreibung: ${rezepte[i].strInstructions}</p>
      <img src="${rezepte[i].strMealThumb}" />
      `;
      }

      document.getElementById("rezepte").innerHTML = output;
    });
}
