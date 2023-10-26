"use client"; 
import {useEffect, useState} from 'react'; 

async function fetchRecipes(ingredient)
{
    try
    {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const {meals} = await response.json();
        return meals; 
        

    }
    catch(error)
    {
        console.error(error); 
    }
    
}

export default function MealIdeas({ingredient})
{
    const [meals, setmeals] = useState([]); 

    

    async function loadMeals()
    {
        try
        {
            setmeals(await fetchRecipes(ingredient));    
        }
        catch(error)
        {
            console.error(error); 
        }
    }

    useEffect(() =>{
        loadMeals();
    }, [ingredient])


    return(
        <section>
            <h2 className='text-xl font-bold text-center py-6'>Meal Ideas</h2>
            {meals ? <p>Meal ideas for {ingredient}</p> : <p>No meal ideas to display</p>}
            <ul>
                {meals && meals.map((meal) => 
                        <li key={meal.idMeal} className="py-2 my-5 bg-gray-700 hover:bg-gray-500 duration-500 text-center max-w-sm mx-auto rounded shadow-lg text-white">
                        <h2>{meal.strMeal}</h2>
                    </li>)}
            </ul>

        </section>
    ) 

}