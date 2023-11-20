"use client"; 

import {useState} from 'react'; 
import Item from './item';

export default function ItemList({itemList, onItemSelect}){
    
    const [sortBy, setSortBy] = useState("name");
    var categories = []; 
    var itemsArr = []; 
    
    let displayedItems = []; 
   try{
  
       displayedItems = [...itemList]; 
   }
   catch(error)
   {
    console.error(error); 
   }
    
    if (sortBy == "name")
    {
        displayedItems.sort((a,b) => a.name.localeCompare(b.name));
    }
    else if (sortBy == "category")
    {
        displayedItems.sort((a,b) => a.category.localeCompare(b.category));
    }
    else if(sortBy == "groupByCat")
    { 
        let groupedObj = displayedItems.reduce((groupedItems, item) => {
            let  category = item.category;
            if (groupedItems[category] == null) 
            {
                groupedItems[category] = [];
                categories.push(category);
            }
            groupedItems[category].push(item); 
            return groupedItems;
        }, {});    
        itemsArr = categories.map((category) => groupedObj[category]); 
        
    }



    function handleSortChange(event){
        setSortBy(event.target.value);
    }

    return (
      <section>
        <div className="flex flex-row gap-2">
          <label>Sort By:</label>
          <button
            onClick={handleSortChange}
            value="name"
            className={sortBy == "name" ? "bg-gray-700 p-2 text-white" : "bg-gray-500 text-black p-2"}
          >
            Name
          </button>
          <button
            onClick={handleSortChange}
            value="category"
            className={sortBy == "category" ? "bg-gray-700 p-2 text-white" : "bg-gray-500 text-black p-2"}
          >
            Category
          </button>
          <button
            onClick={handleSortChange}
            value="groupByCat"
            className={sortBy == "groupByCat" ? "bg-gray-700 p-2 text-white" : "bg-gray-500 text-black p-2"}
          >
            Group By Category
          </button>
        </div>
        <ul>
          {sortBy == "groupByCat"
            ? itemsArr.map((arr, index) => (
                <div
                  className="m-4 p-2 flex flex-col text-black"
                  key={categories[index]}
                >
                  <h2 className="font-bold text-xl capitalize">
                    {categories[index]}
                  </h2>
                  <ul className="ml-8">
                    {arr.map((item) => (
                        <Item onSelect={() => onItemSelect(item)} key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
                    ))}
                  </ul>
                </div>
              ))
            : displayedItems.map((item) => (
                <Item onSelect={() => onItemSelect(item)}
                key={item.id}
                  name={item.name}
                  category={item.category}
                  quantity={item.quantity}
                />
              ))}
        </ul>
      </section>
    );
}