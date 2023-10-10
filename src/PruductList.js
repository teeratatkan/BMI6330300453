import { useState } from "react"


export default function ProductList() {
    const [search,setSearch]=useState("")
    const Item = ({item}) =>{
        return <li key = {item.id}>
            id : {item.id + " "}
            name: {item.name+ " "}
            price: {item.price+ " "}
        </li>
    }
       const Items = [
        { id: 1, name: "MacBook Pro", price: 30000 },
        { id: 2, name: "MacBook Air", price: 22000 },
        { id: 3, name: "MacBook Mini", price: 24000 },
    ]
    const itemsList = Items.map(item =><Item item={item}/>)
    const filter = Items.filter(item => item.name.includes(search))
    const filterList = filter.map(item =><Item item={item}/>)
    const onTextChange = (event) =>{
        setSearch(event.tatget.value);
    }
    return <>
        <h1>My Shop</h1>
        <ul>{itemsList}</ul>
        Serch: <input type="text"onChange={event=>onTextChange(event)}/>
        <h1>Search Result</h1>
        <ul>{filterList}</ul>
    </>;
}