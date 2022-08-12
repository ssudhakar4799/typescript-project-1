
import { useSelector } from 'react-redux'
import React from 'react'

export default function Cart() {
  const state:any = useSelector((state)=>state)
  return (
    <div>cart
      <>
      {
        state.cart.cart.map((data:any,index:number)=>{
          return(
            <div key={index}>
              <h1>{data.name}</h1>
              <img src={data.img}></img>
            </div>
          )

        })
      }
      </>
    </div>
  )
}
