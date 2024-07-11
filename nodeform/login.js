import axios from "axios";
import React from "react";

export function Loginform(){
    function loginsubmission(event){
    event.preventDefault()
    var username =document.getElementById("username").value
    var password =document.getElementById("password").value

    var key={
        username:username,
        password:password
    }

     if(username==""){
        alert("Enter the UserName")
     }
     else if(password==""){
        alert("Enter the Password")
     }
     else {
        axios.post("http://localhost:3002/login",key)
        .then((userdata)=>{
            if(userdata.data.status=='empty_set'){
                alert("Enter valid username")
            }
            else if(userdata.data.status=='success'){
                var id= userdata.data.id
                alert("successfully logged in")
                window.location.href=`/getsingleuser/${id}`
            }
            else if(userdata.data.status=='invalid_password'){
                alert("Enter Valid Password")
            }
            else if(userdata.data.status=='both_are_invalid'){
                alert("ENter Valid username and password")
            }
        })
     }
}


    return(
        <>
         <div className="container-fluid mainDiv">
                <div className="container text-center w-50 p-5 content">
                    <h1>User Login</h1>
                    <form onSubmit={loginsubmission}>
                        <label>Username</label>
                        <input type="text" id="username" placeholder="username/Email" /><br/>
                        <label>Password</label>
                        <input type="password" id="password"  />
                        <p>Forget Password?</p>
                        <input type="submit" className="bg-success p-2" value="submit"/>
                    </form>

                </div>
         </div>
        </>
    );
}