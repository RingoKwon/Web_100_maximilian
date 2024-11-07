import express from "express"

const app = express(); 
const port = 3000

app.get( "/", (req, res)=>{
    // console.log(req.rawHeaders); 
    res.send("<h1>hh</h1>")
})
app.get( "/about", (req, res)=>{
    // console.log(req.rawHeaders); 
    res.send("<h1>about</h1>")
})

app.listen(port, () => {
    console.log(`Sever is running on http://localhost:${port}`)
})