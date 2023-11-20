import {db} from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

export async function getShoppingList(userId)
{
    console.log("Getting shopping list with userID: " + userId);
    const q = query(
        collection(db, "users", userId, "items")
    ); 

    let items = []; 
    const querySnapshot = await getDocs(q); 
    querySnapshot.forEach((doc) => {
        items.push({id: doc.id, ...doc.data()}); 
    })
    console.log("Items at getShoppingList: " + JSON.stringify(items));
    return items;
}

export async function addItem(userId, item)
{
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    console.log("Inside addItem, adding: " + item);
    return docRef.id; 
}