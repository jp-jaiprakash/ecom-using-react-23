import React, { useState } from "react";
import AllProducts from "./AllProducts";
import Basket from "./Basket";
import data from "./data";
import Header from "./Header";


export default function Main(){

    const {products} = data;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find( (x) => x.id === product.id);
        if(exist){
            setCartItems(
                cartItems.map( (x) =>
                x.id === product.id ? {...exist, qty: exist.qty+1} : x)
            )
        }else{
            setCartItems([...cartItems, {...product, qty: 1}]);
        }

    }

    const onRemove = (product) => {
        const exist = cartItems.find( (x) => x.id === product.id);
        if(exist.qty === 1){
            setCartItems(cartItems.filter((x) => x.id !== product.id));

            
        }else{
            setCartItems(
                cartItems.map( (x) =>
                x.id === product.id ? {...exist, qty: exist.qty-1} : x)
            )
        }
    }



    return (
        <div className="App">
            <Header countCartItems={cartItems.length}></Header>
            <div className="row">
                <AllProducts products={products} onAdd={onAdd}></AllProducts>
                <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket>
            </div>
        </div>
    )
}