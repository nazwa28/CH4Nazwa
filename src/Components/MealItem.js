import React from 'react'

const MealItem = (getMeal) => {
    console.log(getMeal.data)
  return (
    <>
    <div className='card'>
        <img src={getMeal.data.strMealThumb}></img>
        <div className='info'>
            <h2>{getMeal.data.strMeal}</h2>
            <p>{getMeal.data.strArea} food</p>
        </div>
        <div className='recipe'>
            
            <h2>Ingredients</h2>
            <p>{getMeal.data.strIngredient1}</p>
            <p>{getMeal.data.strIngredient2}</p>
            <p>{getMeal.data.strIngredient3}</p>
            <p>{getMeal.data.strIngredient4}</p>

            <h2>Instructions</h2>
            <p>{getMeal.data.strInstructions}</p>
            

            

            <img src={getMeal.data.strMealThumb}></img>
           <a href={getMeal.data.strSource}>watch video</a>
        </div>
    </div>
    </>
  );
}

export default MealItem;