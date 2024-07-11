import React, { useEffect, useState } from "react";
import { Menu } from "../ReusableBanner/menu";
import { Link } from "react-router-dom";
export function Jsonfunction()
{
    const [fetchdata,setFetchData]=useState([]);
    useEffect(()=>
    {
        fetch("https://fakestoreapi.com/products/ ")
        .then(response=>response.json())
        .then(data=>setFetchData(data))
    }
    )
    return(
        <>
        <Menu/>
<div className="row  ">
        {
           fetchdata.map((value,index)=>(
                <>
                <div className="col-lg-4 d-flex">
                <div className="card">
                    <img src={value.image}className="card-img-top"/>
                    <div className="card-body">
                    <h1 className="cardtitle">{ value.title}</h1>
                    <p className="cardcontent">{ value.description}</p>
                    <Link to={`/product/${value.id}`}><button >view more</button></Link>
                    {/* <button>viewMore</button> */}

                </div>
                </div>
                </div>
                </>
            
            ))
             }
         </div>
        </>
       
    )
}