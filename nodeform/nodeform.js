import axios from "axios";
import React from "react";
export function Nodeform() {
    function formsubmission(event){
        event.preventDefault()
        var fname=document.getElementById("fname").value
        var lname=document.getElementById("lname").value
        var phoneno=document.getElementById("phoneno").value
        var email=document.getElementById("mail").value
        var city=document.getElementById("city").value
        var state=document.getElementById("state").value
        var password=document.getElementById("password").value

        var key={
            fname:fname,
            lname:lname,
            phoneno:phoneno,
            email:email,
            city:city,
            state:state,
            password:password,
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
        else if(email==""){
            alert("Enter the Email-Id")

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
        else if(password==""){
            alert("Enter the Password")

        }
        else
        {
            axios.post("http://localhost:3002/userdetail",key)
            .then((userdet)=>{
                if(userdet.data.status==="error"){
                    alert("data not inserted")
                    window.location.reload()
                }
                else if(userdet.data.status==="success"){
                    alert("data inserted")
                    window.location.href="/loginform"
                }
            })
        }
    }
    return (
        <>
            <div className="container-fluid mainDiv">
                <div className="container text-center w-50 p-5 content">
                    <h1 className="text-decoration-underline">USER REGISTRATION</h1>
                    <form onSubmit={formsubmission}>  
                        <label>Enter your Email-Id</label>
                        <input type="text" placeholder="email" id="mail" /><br/>
                        <label>Enter your First Name</label>
                       <input type="text" placeholder="firstname" id="fname" /><br/>
                        <label>Enter your Last Name</label>
                        <input type="text" placeholder="lastname" id="lname" /><br/>
                        <label>Enter your Phone No</label>
                        <input type="text" placeholder="phone Number" id="phoneno" /><br/>
                        <label>Enter your City</label>
                        <input type="text" placeholder="city" id="city" /><br/>
                        <label>Enter your State</label>
                        <input type="text" placeholder="State" id="state" /><br/>
                        <label>Enter your Password</label>
                        <input type="password" placeholder="password" id="password" /><br/>
                        {/* <label>Enter your Re-Enter Password</label>
                        <input type="password" placeholder="re-enter password" id="repass" /><br/> */}
                       <input type="submit" className="bg-success p-2" value="submit"/>
                                            </form>
                         <a href="/loginform">Already Have Account? Login</a>                   
                                            

                    
                     
                </div>

            </div>
        </>
    );

}