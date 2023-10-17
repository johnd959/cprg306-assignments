"use client"; 
import ItemList from './item-list';
import NewItem  from './new-item';
import itemsData from './items.json'; 
import { useState } from 'react';

export default function Page(){

    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem)
    {
        console.log(newItem); 
        setItems((currentItems) => [...currentItems, newItem])
    }

    return(
        <main >
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList itemList={items}/>
        </main>
    )
}