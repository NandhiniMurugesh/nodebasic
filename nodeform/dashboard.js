import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Dashboard(){
    var {id} = useParams()
    const[fname,setFname]=useState('')
    useEffect(()=>{
        fetch("http://localhost:3002/getsingleuser/"+id)
        .then(res=>res.json())
        .then((data)=>{
            setFname(data[0].fname)
        })
    })
    return(
        <>
         <div className="container-fluid mainDiv">
            <Link to={`/update/${id}`}><button  className="btn btn-light" type="button" id="updatebtn" name="updatebtn" >Update Profile</button></Link>
                <div className="container text-center w-50 p-5 content">
                    <h2 className="text-center">Hi {fname} 👋, Welcome Back</h2>
                    
                    

                </div>
         </div>
        </>
    );
}