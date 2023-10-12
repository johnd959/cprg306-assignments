import ItemList from './item-list';


export default function Page(){
    return(
        <main className='flex flex-row justify-between'>
            <h1>Shopping List</h1>
            <ItemList/>
        </main>
    )
}