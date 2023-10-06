"use client"; 

import {useState} from 'react'; 
import Item from './item';
import itemList from './items.json';

export default function ItemList(){
    
    const [sortBy, setSortBy] = useState("name");
    var categories = []; 
    var itemsArr = []; 

    let displayedItems = itemList; 
    
    if (sortBy == "name")
    {
        itemList.sort((a,b) => a.name.localeCompare(b.name));
    }
    else if (sortBy == "category")
    {
        itemList.sort((a,b) => a.category.localeCompare(b.category));
    }
    else if(sortBy == "groupByCat")
    { 
        let groupedObj = itemList.reduce((groupedItems, item) => {
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
        <div className="flex flex-row justify-between">
          <button
            onClick={handleSortChange}
            value="name"
            className={sortBy == "name" ? "bg-blue-500" : "bg-gray-500"}
          >
            Name
          </button>
          <button
            onClick={handleSortChange}
            value="category"
            className={sortBy == "category" ? "bg-blue-500" : "bg-gray-500"}
          >
            Category
          </button>
          <button
            onClick={handleSortChange}
            value="groupByCat"
            className={sortBy == "groupByCat" ? "bg-blue-500" : "bg-gray-500"}
          >
            Group By Category
          </button>
        </div>
        <ul>
          {sortBy == "groupByCat"
            ? itemsArr.map((arr, index) => (
                <div
                  className="m-4 p-2 flex flex-col bg-blue-500 text-white"
                  key={categories[index]}
                >
                  <h2 className="font-bold text-xl capitalize">
                    {categories[index]}
                  </h2>
                  <ol className="list-disc">
                    {arr.map((item) => (
                      <li className="ml-8" key={item.id}>
                        {item.name}
                      </li>
                    ))}
                  </ol>
                </div>
              ))
            : displayedItems.map((item) => (
                <Item
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