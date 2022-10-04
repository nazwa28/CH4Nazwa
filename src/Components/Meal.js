 import React, {useState} from 'react'
import MealItem from './MealItem';
const Meal = () => {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt) => {
        if(evt.key=="Enter")
        {
            
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res=>res.json())
            .then(data=>{
                setMeal(data.meals)
            })
        }
    }
    return (
        <div className='main'>
            <div className='heading'>
            <div className='heading-first'>
                <h1>All Foods</h1>
            </div>
            <div className='heading-second'>
                <h3> Search Your Food Reciepe</h3>
            </div> 
            </div>
            <div className='searchBox'>
                <input type="search" className='search-bar' placeholder='Enter Food Name' onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal} >
                </input>
            </div>
            
            <div className='container'>
                {
                    (Mymeal==null)? <p className='notFound'>No Data</p> : Mymeal.map((res) => {
                        return(
                            <MealItem data={res}/>
                        )
                    })
                }
          
            </div>
        </div>
        
    );
}

export default Meal;