import React, { Fragment } from "react";
import "../assets/css/grocerylist.css";


function GroceryItem(props) {
    <li class="groceryItem">
         <h2>{props.name}</h2>
         <p>price: {props.price}</p>
         <img src={props.image} alt={props.name}></img>
    </li>
}


function GroceryItems(props) {
    return( <h1>test</h1>)
}

function SearchBar() {
    return (<div id="searchWrapper">
    <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="search for an item"
    />
</div>)
}


export default function GroceryList() {
    return(
        <div class="container">
        <h1>&#x2728;Grocery List &#x2728;</h1>
        <SearchBar/>
        <GroceryItems props={groceryJSON}/>
        </div>
    )
    
}


