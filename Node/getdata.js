import React, { useEffect, useState } from "react";
import { Menu } from "../ReusableBanner/menu";
import { Link } from "react-router-dom";
import axios from "axios";
export function Getdata()
{
    const [getfetchdata,setGetFetchData]=useState([]);
    useEffect(()=>
    {
        fetch("http://localhost:3002/getdata")
        .then(responsedata=>responsedata.json())
        .then(getndata=>setGetFetchData(getndata))
    }
    )
    const del=(empid)=>{
      var key={empid:empid}
      axios.post('http://localhost:3002/delete',key)
      .then((res)=>{
        if(res.data.status==="error"){
          alert("data is not deleted")
        }
        else if(res.data.status==="success"){
          alert('data is deleted')
        }
      })
    }
    return(
      <>
      <div className="topdiv">
      <h1 className="text-center text-success">Employee Details</h1><hr/><hr/>
      {
           getfetchdata.map((value,index)=>(

                <>
                <table border="5" className="bg-info mt-5  " cellPadding={8} cellSpacing={5}  >
                    <tr >
                    <td>{value.empno}</td>
                    <td>{value.empname}</td>
                    <td>{value.job}</td>
                    <td>{value.sal}</td>
                    <td>{value.deptno}</td>
                    <Link to={`/getsingle/${value.empno}`} className="bg-success">view more</Link>
                  <button className="bg-danger" onClick={()=>{del(value.empno)}}></button>
                </tr>
                </table>
                
      </>  
           )
           )}
           </div>
           </>
    );
}