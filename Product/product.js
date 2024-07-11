import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export function Product()
{
    const[fetchdata,setFetchData]=useState([])
    var {id}=useParams()
    
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+id)
        .then(res=>res.json())
        .then(data=>setFetchData(data))
    })
    return(
        <>
        <div className='row'>
        <div className='col-lg-6'>
            <img src={fetchdata.image}className='img-fluid'/>
         </div>
         <div className='col-lg-6'>   
            <h1>{fetchdata.title}</h1>
            <p>{fetchdata.price}</p>
            <p>{fetchdata.id}</p>
            <p>{fetchdata.category}</p>
            <p>{fetchdata.description}</p>
             
            </div>
        </div>
    </>
    );
}