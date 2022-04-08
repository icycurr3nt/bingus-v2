import React, { useState } from "react";
import groceryItemsJSON from "../assets/files/GroceryItems.json";
import "../assets/css/grocerylist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


function GroceryItem(props) {
    return (
    <li class="groceryItem">
         <h2>{props.name}</h2>
         <p>Price: ${props.price} Category: {props.category}</p>
         <img src={props.image} alt={props.name}></img>
         <button style={{"width": "50%"}} onClick={props.onClick}>{props.btnText}</button>
    </li>
    )
}


function GroceryItems(props) {
    const rows = [];
    const [cartItems, setCartItems] = useState(new Set());

    

    props.groceryItems.forEach((grocery) => {
        const matchText = new RegExp(props.searchText.toLowerCase(), 'g')
        if (matchText.test(grocery.name.toLowerCase())) {
            if (props.showCart && cartItems.has(grocery.name)) {

                const onClickGrocery = () => {
                    let cloned_cart = new Set(cartItems);
                    cloned_cart.delete(grocery.name)
                    setCartItems(cloned_cart)
                }

                rows.push(
                    <GroceryItem name={grocery.name} price={grocery.price} image={grocery.image}
                        category={grocery.category} key={grocery.name} onClick={onClickGrocery}
                        btnText="Remove"
                    />);
                }
            else if (props.showCart !== true) {

                const onClickGrocery = () => {
                    setCartItems(cartItems.add(grocery.name))
                }

                rows.push(
                    <GroceryItem name={grocery.name} price={grocery.price} image={grocery.image}
                        category={grocery.category} key={grocery.name} onClick={onClickGrocery}
                        btnText="Add to Cart"
                    />);
            }
        }

    });
    return (
        <div>
            <button input="button" onClick={props.toggleShowCart} style={{"position": "absolute",
                        "top": "100px",
                        "right": "100px"}}>
                            {cartItems.size} 
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <ul id="groceryList">{rows}</ul>
        </div>
    )
}


function SearchBar (props) {
    return (
    <div id="searchWrapper">
    <input
        type="text"
        name="searchBar"
        id="searchBar"
        value={props.value}
        onChange={props.onChange}
        placeholder="search for an item"
    />  
</div>
    )
    
}


export default function GroceryList (props) {
    const [searchText, setSearchText] = useState("");
    const [showCart, toggleShowCart] = useState(false);
    const onChangeSearchBar = (e) =>  {
        setSearchText(e.target.value)
    }

    const onClickShoppingCart = () => {
        toggleShowCart(showCart ? false : true)
    }
    return (
            <div class="container">
                <h1>&#x2728;Grocery {showCart ? "Cart" : "List"} &#x2728;</h1>
                <SearchBar onChange={onChangeSearchBar} value={searchText}/>
                <GroceryItems groceryItems={groceryItemsJSON} searchText={searchText}
                            showCart={showCart} toggleShowCart={onClickShoppingCart}/>
            </div>
        ) 
}

