"use client";
import {useState} from 'react';

export default function NewItem({onAddItem})
{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function makeID()
    {
        let idChar = [];
        while (idChar.length <= 18)
        {
            let num = Math.floor(Math.random() * 100)
            if (num >= 65 && num <= 90)
            {
                idChar.push(num);
            }
        }
        return String.fromCharCode(...idChar);
    }

    const handleSubmit = (event) =>{

        if (name === "")
        {
            alert("Please enter a name for the item to be added");
            return; 
        }

        const item = {
            id: makeID(),
            name: name,
            quantity: quantity, 
            category: category
        }; 
        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("produce");
        event.preventDefault();


    };

    const handleNameChange = (event) =>{
        setName(event.target.value); 
    };

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const handleCategoryChange = (event) =>{
        setCategory(event.target.value); 
    }
        return(
            <form className='grid grid-rows-3 m-4 p-5 gap-4 bg-gray-700'>
                <div className='flex flex-row'>
                    <input type="text" placeholder="Item Name"value={name} onChange={handleNameChange} required className='mr-2 rounded-sm border-none focus:bg-gray-100'></input>
                    <input type="number" min="1" max="99" value={quantity} onChange={handleQuantityChange} required className='ml-2 rounded-sm border-none focus:bg-gray-100'></input>
                </div>
                <select className='rounded-lg focus:bg-gray-100' value={category} onChange={handleCategoryChange}>
                    <option value="produce">Produce</option>
                    <option value="dairy">dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="other">Other</option>
                </select>
                <button onClick={handleSubmit} type="submit" className='bg-gray-400 text-white rounded-lg hover:bg-gray-900 active:bg-yellow-600 active:text-black'>
                    Add Item
                </button>
            </form>
        );
};