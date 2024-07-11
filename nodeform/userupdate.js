import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Update(){
    var {id} = useParams()
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    const[phoneno,setPhoneno]=useState('')
    const[mail,setMail]=useState('')
    const[city,setCity]=useState('')
    const[state,setState]=useState('')
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    useEffect(()=>{
        fetch("http://localhost:3002/getsingleuser/"+id)
        .then(res=>res.json())
        .then((data)=>{
            setFname(data[0].fname)
            setLname(data[0].lname)
            setMail(data[0].mail)
            setPhoneno(data[0].phoneno)
            setCity(data[0].city)
            setState(data[0].state)
            setUsername(data[0].username)
            setPassword(data[0].password)
        })
    },[])
    function handleupdate(event){
        event.preventDefault()
        var fname=document.getElementById("fname").value
        var lname=document.getElementById("lname").value
        var phoneno=document.getElementById("phoneno").value
        var city=document.getElementById("city").value
        var state=document.getElementById("state").value
        
        var key={
            fname:fname,
            lname:lname,
            phoneno:phoneno,
            city:city,
            state:state,
         
        }
        if(fname==""){
            alert("Enter the First Name")
        }
        else if(lname==""){
            alert("Enter the Last Name")

        }
        else if(phoneno==""){
            alert("Enter the Phone no")

        }
        else if(lname==""){
           alert("Enter the Last Name")

        }
        else if(city==""){
            alert("Enter the City")

        }
        else if(state==""){
            alert("Enter the State")

        }
        else{
            axios.put("http://localhost:3002/update/"+id,key)
            .then((upddet)=>{
                if(upddet.data.status==='not_updated'){
                    alert("data not updated")
                    console.log("not_updated")
                
                }
                else if (upddet.data.status==='success'){
                    alert("data updated Successfully!")
                    console.log("success")
                    window.location.href="/getsingleuser"
                }

            })
        }
    }
    return (
        <>
            <div className="container-fluid mainDiv">
                <div className="container text-center w-50 p-5 content">
                    <h1 className="text-decoration-underline">USER PROFILE</h1>
                    <form onSubmit={handleupdate}>  
                        <label>Email-Id</label>
                        <input type="text" placeholder="email"  id="mail" value={mail} /><br/>
                        <label> First Name</label>
                       <input type="text" placeholder="firstname" onChange={(upd)=>setFname(upd.target.value)} id="fname" value={fname}/><br/>
                        <label> Last Name</label>
                        <input type="text" placeholder="lastname" onChange={(upd)=>setLname(upd.target.value)} id="lname" value={lname} /><br/>
                        <label> Phone No</label>
                        <input type="text" placeholder="phone Number" onChange={(upd)=>setPhoneno(upd.target.value)} id="phoneno" value={phoneno} /><br/>
                        <label> City</label>
                        <input type="text" placeholder="city" onChange={(upd)=>setCity(upd.target.value)}  id="city" value={city} /><br/>
                        <label> State</label>
                        <input type="text" placeholder="State" onChange={(upd)=>setState(upd.target.value)} id="state" value={state} /><br/>
                        <label> Username</label>
                        <input type="text" placeholder="username/email" id="username"  value={username}/><br/>
                        <label> Password</label>
                        <input type="password" placeholder="password" id="password" value={password} /><br/>
                    
                       <input type="submit" className="bg-success p-2" value="Update
                       "/>
                                            </form>
                                       
                                            

                    
                     
                </div>

            </div>
        </>
    );
}