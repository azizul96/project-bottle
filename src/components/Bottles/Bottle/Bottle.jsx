
const Bottle = ({bottle, addCartHandler}) => {
    const {name, img, price} = bottle



    return (
        <div className=" border-2 border-red-500 rounded-lg mb-5 bg-green-100 text-center p-5 shadow-lg">
            <h1 className="text-center font-bold text-3xl my-5 ">{name}</h1>
            <div className="flex justify-center mb-3 ">
                <img className="w-72 rounded-xl " src={img} alt="" />
            </div>
            <p className="text-center text-base font-semibold mb-3">Price: ${price}</p>
            <button onClick={()=> addCartHandler(bottle)} className="btn btn-md btn-error text-white ">Add To Cart</button>
        </div>
    );
};

export default Bottle;