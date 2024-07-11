// insert data in userdetails table from registration
connect.post('/userdetails',(request,response)=>{
    let{fname,lname,age,gender,location,phoneno,email,username,password}=request.body
    let sql='insert into userdetails(fname,lname,age,gender,location,phoneno,email,username,password) values(?,?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql,[fname,lname,age,gender,location,phoneno,email,username,password],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
// insert data in location table from addlocation
connect.post('/addloc',(request,response)=>{
    let{locname,locimage,locreview}=request.body
    let sql='insert into location(locname,locimage,locreview) values(?,?,?)'
    databaseconnection.query(sql,[locname,locimage,locreview],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log("ok")
        }
    })
})
// insert data in spot table from addspot
connect.post('/addspot',(request,response)=>{
    let{spotname,spotimage,spotreview}=request.body
    let sql='insert into spot(spotname,spotimage,spotreview) values(?,?,?)'
    databaseconnection.query(sql,[spotname,spotimage,spotreview],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log("ok")
        }
    })
})
// single data fetch for userdash
connect.get('/singleuser/:id',(request,response)=>{
    let {uid} = request.params
    let sql='select * from userdetails where uid=?'
    databaseconnection.query(sql,[uid],(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
        
    })
})
// login Page
connect.post('/login',(request,response)=>{
    let {username,password}=request.body
    let sql='select * from userdetails where username=?'
    databaseconnection.query(sql,[username],(error,result)=>{
        if(error){
            response.send({"status":"empty_set"})
        }
       else if(result.length>0){
        var dbusername=result[0].username
        var dbpassword=result[0].password
        var id = result[0].id
        
                  
        if(dbusername===username && dbpassword===password ){
            // && usertype=="reader"|| usertype=="author"
            response.send({"status":"success","id":id
            // "usertype":usertype
        })
            // if(usertype=="reader" || usertype=="author")
            // {
            //     response.send({"status":"success","usertype":usertype})
            // }
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