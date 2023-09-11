import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle/Bottle";
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
        
    }, [])
    // Load cart from local storage
    useEffect(()=>{
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            const savedCart = []

            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart)
        }

    }, [bottles])

    const addCartHandler = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart);
        addToLS(bottle.id);
    }

    const removeCartHandler = id =>{
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        removeFromLS(id)
    }

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-cyan-500 text-5xl text-center my-5 mb-10">Memorable Water Bottles</h1>
            
            <Cart cart={cart} removeCartHandler={removeCartHandler} ></Cart>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    bottles.map(bottle => <Bottle key={bottle.id}  bottle={bottle} addCartHandler={addCartHandler}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;