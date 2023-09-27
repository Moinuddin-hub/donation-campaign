import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useLoaderData} from "react-router-dom";
import SingleCart from "../SingleCart/SingleCart";
const Cart = () => {

    const[cart,setCart]=useState();
    const {id}=useParams();
    // console.log(id);
    const carts=useLoaderData();
    // console.log(carts);

    useEffect(()=>{
        const findCart=carts?.find((cart)=> cart.id===id);
       setCart(findCart);
        
    },[id,carts])
//   console.log(cart);

    return (
        <div>
          {
              <SingleCart cart={cart}></SingleCart>
          }
        </div>
    );
};

export default Cart;