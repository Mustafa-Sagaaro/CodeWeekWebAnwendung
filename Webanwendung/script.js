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