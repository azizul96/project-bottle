
const Cart = ({cart, removeCartHandler}) => {
    return (
        <div>
            <p className="text-center font-semibold text-red-500 mb-10">Cart: {cart.length}</p>
            <div className="flex justify-center gap-3 mb-5">
                {
                    cart.map(bottle => <div key={bottle.id} className="mb-10">

                        <img  className=" w-16 h-16 mb-1" src={bottle.img}alt="" />
                        <button onClick={()=> removeCartHandler(bottle.id)} className="btn btn-xs btn-warning">Remove</button>

                    </div>)
                }
                
            </div>
        </div>
    );
};




export default Cart;
