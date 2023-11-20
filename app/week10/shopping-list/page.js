"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useEffect, useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import { redirect } from "next/navigation";
import {getShoppingList} from "../_services/shopping-list-service"; 
import {addItem} from "../_services/shopping-list-service"; 

export default function Page() {
  const [items, setItems] = useState([]);
  const [itemSelectedName, setSelectedItemName] = useState(null);
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  function handleAddItem(newItem) {
    console.log("At handleAdditem:" + newItem);
    let id = addItem(user.uid, newItem); 
    newItem.id = id; 
    setItems((currentItems) => [...currentItems, newItem]);
  }

  function handleItemSelect(ingredient) {
    let cleanedStr = ingredient.name
      .replace(/[^a-z\s]+$/i, " ")
      .trim()
      .split(",")[0]
      .replace(" ", "_");
    setSelectedItemName(cleanedStr);
  }

  async function handleOnSignOut() {
    try {
      console.log("Trying to sign out");
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  }

  async function loadItems()
  {
    try{ 
      let items = await getShoppingList(user.uid)
      items = items.map((item) => item); 
      setItems(items); 
    }
    catch(error)
    {
      console.error(error); 
    }
    
  }


  useEffect(() => {
    console.log("Loading items at useEffect"); 
    loadItems();
  },
  [user]); 

  if (user != null) {
    console.log(`User: ${user?.displayName}`);
    return (
      <main>
        <h1 className="text-xl font-bold text-center py-6">Shopping List</h1>
        <div className="flex flex-row p-6">
          <div className="p-4">
            <NewItem onAddItem={handleAddItem} />
            <ItemList itemList={items} onItemSelect={handleItemSelect} />
          </div>
          <MealIdeas ingredient={itemSelectedName} />
        </div>
        <button onClick={handleOnSignOut}>Sign out</button>
      </main>
    );
  } else {
    return <Link href="./">Back to Week 8</Link>;
  }
}
