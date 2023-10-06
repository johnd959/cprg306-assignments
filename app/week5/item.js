export default function Item({name, quantity, category}){
    return(
        <li className="bg-blue-500 p-2 m-4 text-white">
            <h2>{name}</h2>
            <h3>{`${category} - ${quantity}`}</h3>
        </li>
    )
}