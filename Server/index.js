// const variablename=require(packagename) - syntax to import the package
const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const mysql = require("mysql")
// const variablename=package variablename into function using ()
const connect = express()
// connect the other packages with express by using use keyword
connect.use(cors())
// body-parser comes in the format of array of array that is json
connect.use(bodyparser.json())
// express data will taken out as json as the bodyparser data will be stored and taken out to fe
connect.use(express.json())
// the data taken out from the be is taken to fe and stored into public folder as the fe can read the data
connect.use(express.static('public'))
// encoding process will be done through urlencoded predef function.,extended keyword should be true as it has boolean values to encrypt the user data
connect.use(bodyparser.urlencoded({extended:true}))

// let variablename=mysql variable name . createConnection predef func()
// inside createConnection 5 values are addedinto the function that differs to person to person
let databaseconnection=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"N@ndhu0514",
    database:"node"

})
// to check whether db connected to BE, the connect keyword here is a predef func of mysql which is not related to express method.
databaseconnection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("database connected")
    }
})
// to get all the data ckground
// expressmethod keyword . getmethod ( endpoint delined here like '/variablename',(requestvariablename,responsevariablename)=>{
// let variable='sqlquery to be coded'
// databaseconnectionvariable . query(variable,(error,result)=>{
// if(cond){
//     response.send(state1)
// }
// else{
//     response.send(state2)
// }
// })
// })

connect.get('/getdata',(request,response)=>{
    let sql='select * from emp'
    databaseconnection.query(sql,(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
       
    })
})

// to recieve data from FE and filter the data dynamically through sql query.
// single or particular data
// expressmethod keyword . getmethod ( endpoint delined here like '/variablename',(requestvariablename,responsevariablename)=>{
//let {user variable }=request.params .. to fetch the data and store
// let variable='sqlquery to be coded the where cond to filter add ? to make the value pass during execution'
// databaseconnectionvariable . query(variable,[uservariable](error,result)=>{
// if(cond){
//     response.send(state1)
// }
// else{
//     response.send(state2)
// }
// })
// })
connect.get('/getsingle/:empno',(request,response)=>{
    let {empno} = request.params
    let sql='select * from emp where empno=?'
    databaseconnection.query(sql,[empno],(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
        
    })
})

// delete the data
connect.post('/delete/',(request,response)=>{
    let {empno} = request.body.empno
    let sql='delete from emp where empno=?'
    databaseconnection.query(sql,[empno],(error,result)=>{
        if(error) {
         response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
        
    })
})

// form data insert
connect.post('/userdetail',(request,response)=>{
    let {fname,lname,phoneno,email,city,state,password} = request.body
    let sql='insert into userdetail(fname,lname,phoneno,mail,city,state,username,password)values(?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql,[fname,lname,phoneno,email,city,state,email,password],(error,result)=>{
        if(error) {
         response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
        
    })
})
//Login Page 
connect.post('/login',(request,response)=>{
    let {username,password}=request.body
    let sql='select * from userdetail where username=?'
    databaseconnection.query(sql,[username],(error,result)=>{
        if(error){
            response.send({"status":"empty_set"})
        }
       else if(result.length>0){
        var dbusername=result[0].username
        var dbpassword=result[0].password
        var id = result[0].id
                  
        if(dbusername===username && dbpassword===password){
            response.send({"status":"success","id":id})
        }
        else{
            response.send({"status":"invalid_password"})
        }
        }
        else{
            response.send({"status":"both_are_invalid"})
        }
    })

})

// single data for node form
connect.get('/getsingleuser/:id',(request,response)=>{
    let {id} = request.params
    let sql='select * from userdetail where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
        
    })
})

// update the data
connect.put('/update/:id',(request,response)=>{
    let {id}=request.params
    let {fname,lname,phoneno,city,state} = request.body
    let sql='update userdetail set fname=?,lname=?,phoneno=?,city=?,state=? where id=?'
    databaseconnection.query(sql,[fname,lname,phoneno,city,state,id]),(error,result)=>{
        if(error){
            response.send({"status":"not_updated"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    }
})

// to check the database connection through server similar to React ,
//  there is no default port no for node so the port num can be user defined, should be 4 digit
// connect here is express method, listen should always be at end.
connect.listen(3002,()=>{
    console.log("your server is running in port 3002")
})

