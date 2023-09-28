
export default function Item({item}) {
  return (
      <li className="py-2 my-5 bg-gray-700 hover:bg-gray-500 duration-500 text-center max-w-sm mx-auto rounded shadow-lg text-white">
        <h1 className="hover:font-bold hover:text-lg duration-500">{item.name}</h1>
        <p>
          Buy {item.quantity} in {item.category}
        </p>
      </li>
  );
}
