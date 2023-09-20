import { list } from "postcss";

export default function Item({name, quantity, category})
{
    return(
        <ul className="py-2 my-5 bg-gray-700 hover:bg-gray-500 duration-500 text-center max-w-sm mx-auto rounded shadow-lg ">
            <li className="text-white">
                <h1 className="hover:font-bold hover:text-lg duration-500">{name}</h1>
                <p>Buy {quantity} in {category}</p>
            </li>
        </ul>
    );

}