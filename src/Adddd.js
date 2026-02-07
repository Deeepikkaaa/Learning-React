//Add to cart using the react use state
import { useState } from "react";

const brands = [
    { id: "1", brand: "puma" },
    { id: "2", brand: "puma" },
    { id: "3", brand: "puma" },
    { id: "4", brand: "puma" },
    { id: "5", brand: "puma" },
];

export default function AddingCart() {

    const [state, setState] = useState('');
    const [cart, setCart] = useState([]);
    const onAddToCartClick = (brand) => {
        setCart([...cart, setCart]);
        console.log("Added:", brand)
    }

    return (
        <>
            <h1>hieeee from map.,learning map</h1>
            {
                brands.map((brand => {
                    return (
                        <div key={brand.id}><p>{brand.brand}</p>
                            <button onClick={() => onAddToCartClick(brand)}>Add Brand</button>
                        </div>
                    )
                }))
            }

            <div>
                <h3>Cart</h3>

                <p>Items:{cart.length}</p>

                {
                    cart.map((item,index)=>(
                        <div key={index}>
                            <p>{item.brand}</p>
                        </div>
                    ))
                }
            </div>

        </>
    )
}