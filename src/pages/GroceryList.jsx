import React from "react";
import groceryItemsJSON from "../assets/files/GroceryItems.json";
import "../assets/css/grocerylist.css";


function GroceryItem(props) {
    return (
    <li class="groceryItem">
         <h2>{props.name}</h2>
         <p>Price: ${props.price} Category: {props.category}</p>
         <img src={props.image} alt={props.name}></img>
    </li>
    )
}


function GroceryItems(props) {
    const rows = [];
        
    props.groceryItems.forEach((grocery) => {
        rows.push(
            <GroceryItem name={grocery.name} price={grocery.price} image={grocery.image}
                category={grocery.category} key={grocery.name}
            />
        );
    });

    return <ul id="groceryList">{rows}</ul>
}

function SearchBar() {
    return (
    <div id="searchWrapper">
    <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="search for an item"
    />
</div>)
}


export default function GroceryList () {

    return (
            <div class="container">
                <h1>&#x2728;Grocery List &#x2728;</h1>
                <SearchBar/> 
                <GroceryItems groceryItems={groceryItemsJSON}/>
            </div>
        )  
}

