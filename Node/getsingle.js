import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Getsingle(){
    var {empno}=useParams()
    const[ename,setEname]=useState('')
    const[job,setJob]=useState('')
    const[sal,setSal]=useState('')
    const[mgr,setMgr]=useState('')
    const[dept,setDept]=useState('')
    useEffect(()=>{
        fetch("http://localhost:3002/getsingle/"+empno)
        .then(empdetail=>empdetail.json())
        .then((data)=>{
            setEname(data[0].ename)
            setJob(data[0].job)
            setSal(data[0].sal)
            setMgr(data[0].mgr)
            setDept(data[0].dept)
        })
        }
    )
    return(
        <>
        <h1>{ename}</h1>
        <h1>{job}</h1>
        <h1>{sal}</h1>
        <h1>{mgr}</h1>
        <h1>{dept}</h1>
        </>
    );
}