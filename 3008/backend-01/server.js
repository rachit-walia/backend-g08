const express=require('express')
const app=express()
const PORT=4000;
app.get("/",(req,res)=>{
    res.send("Hello , Rachit walia is the real boss")
})
app.listen(PORT,()=>{
    console.log(`Server is starting on ${PORT}`);
})