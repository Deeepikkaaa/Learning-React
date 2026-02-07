import { useState } from "react";

    const allBrands = [
        { id: "1", brandName: "gucci" },
        { id: "2", brandName: "adiddas" },
        { id: "3", brandName: "nike" },
        { id: "4", brandName: "puma" },
        { id: "5", brandName: "fila" }

    ];
    export default function AddCart(){
        const [selectedBrand,setSelectedBtand]=useState('');
        const[cart,setCart]=useState([]);
        const onAddToCartClick=(brand)=>{
           setCart([...cart,brand]);
           console.log("Added:",brand);
        }
 
        return(
            <>
            <div>
                <p>Add brand to your cart</p>
                {//"For each brand in allBrands, create a <div> and put the brand info inside"
                  allBrands.map((brand=><div key={brand.id}>
                    <p>{brand.brandName}</p>
                    <button onClick={()=>onAddToCartClick(brand)}>Add to cart</button>
                    </div>) ) 
                }
            </div>
            <div>
                <h2>cart</h2>
                <p>Items in the cart:{cart.length}</p>
                {cart.map((item,index)=>{
                    <div key={index}>
                        <p>{item.brandName}</p>
                    </div>

                })}
            </div>
            </>

        )
    }