"use client";
import {useState} from 'react';

export default function NewItem()
{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) =>{
        event.preventDefault(); 
        const item = {
            name: name,
            quantity: quantity, 
            category: category
        }; 
        console.log(item);
        alert(`Item name: ${name == "" ? "empty" : name}
        Item Quantity ${quantity}
        Category ${category === "" ? "none" : category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
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
            <form className='grid grid-rows-3 m-4 p-5 gap-4 bg-blue-900'>
                <div className='flex flex-row'>
                    <input type="text" placeholder="Item Name"value={name} onChange={handleNameChange} required className='mr-2 rounded-sm border-none focus:bg-gray-100'></input>
                    <input type="number" min="1" max="99" value={quantity} onChange={handleQuantityChange} required className='ml-2 rounded-sm border-none focus:bg-gray-100'></input>
                </div>
                <select className='rounded-lg focus:bg-gray-100' value={category} onChange={handleCategoryChange} required>
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
                <button onClick={handleSubmit} type="submit" className='bg-blue-400 text-white rounded-lg hover:bg-blue-600 active:bg-yellow-600 active:text-black'>
                    Submit
                </button>
            </form>
        );
};