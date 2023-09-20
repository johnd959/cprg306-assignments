import Item from "./item";
import ItemList from "./item-list";

export default function Page()
{
    return(
        <main className="bg-white">
            <h1 className="font-bold text-xl text-center">Shopping List</h1>
            <ItemList/>
        </main>
    );
}