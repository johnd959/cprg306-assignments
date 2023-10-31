"use client"; 
import ItemList from './item-list';
import NewItem  from './new-item';
import itemsData from './items.json'; 
import { useState } from 'react';
import MealIdeas from './meal-ideas';

export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [itemSelectedName, setSelectedItemName] = useState(null); 

    function handleAddItem(newItem)
    {
        console.log(newItem); 
        setItems((currentItems) => [...currentItems, newItem])
    }

    function handleItemSelect(ingredient)
    {
        let cleanedStr = ingredient.name.replace(/[^a-z\s]+$/i, ' ').trim().split(',')[0].replace(' ', '_');
        setSelectedItemName(cleanedStr); 
    }

    return(
        <main>
            <h1 className='text-xl font-bold text-center py-6'>Shopping List</h1>
            <div className='flex flex-row p-6'>
                <div className='p-4'>
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList itemList={items} onItemSelect={handleItemSelect}/>
                </div>
            <MealIdeas ingredient={itemSelectedName}/>
            </div>
        </main>
    )
}