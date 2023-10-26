export default function Item({name, quantity, category, onSelect}){
    return(
        <li onClick={onSelect} className="py-2 my-5 bg-gray-700 hover:bg-gray-500 duration-500 text-center max-w-sm mx-auto rounded shadow-lg text-white">
            <h2>{name}</h2>
            <h3>{` Buy ${quantity} in ${category}`}</h3>
        </li>
    )
}