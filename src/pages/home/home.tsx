
import Product from "../products/product.json"
import React from 'react'
import "./home.scss"
import { addcart ,favorite} from "../redux/slice"
import { useSelector,useDispatch } from "react-redux"

export default function Home() {

const state=useSelector((state:any)=>state);
const dispatch=useDispatch();
console.log(state);



  const cart =(items:any)=>{
    dispatch(addcart([...state.cart.cart,items]))

  }
  const fav =(items:any)=>{
    dispatch(favorite([...state.fav.fav,items]))

  }

  return (
    <div className="container">
      {/* <h1>home</h1> */}
      <>
      {
      Product.map((data: any,index: number)=>{
        return(
          <div key={index} className="boxes">
            <h1>{data.name}</h1>
            <img src={data.img}></img><br></br>
            <button onClick={()=>cart(data)}>addcart</button>
            <button onClick={()=>fav(data)}>favorite</button>

          </div>

        )
        })
      }
      </>
    </div>
  )
}
