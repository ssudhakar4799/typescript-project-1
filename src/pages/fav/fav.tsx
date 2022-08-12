
import { useSelector } from 'react-redux'
import React from 'react'

export default function Fav() {
  const state:any=useSelector((state)=>state);
  return (
    <div>fav
      {
        state.fav.fav.map((data:any,index:number)=>{
          return(
            <div key={index}>
              <h1>{data.name}</h1>

            </div>
          )

        })
      }
    </div>
  )
}
