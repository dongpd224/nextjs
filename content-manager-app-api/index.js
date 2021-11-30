//Import framework va thu vien
const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 3001


//Dinh nghia path dan den data
const fs = require("fs")
const path = require('path')
const pathToFile = path.resolve("./data.json")

// // Cors dùng để cho phép domain khác truy cập vào domain này để lấy dữ liệu
// const cors = require('cors')
// const corsOptions = {
//     origin: 'http://localhost:3000', //Origin hợp lệ được truy cập dữ liệu sẽ được cú pháp như này
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
// app.use(cors(corsOptions))

const getResources =()=> JSON.parse(fs.readFileSync(pathToFile))

// HTTP logger
app.use(morgan('combined'));

// Set route
app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.get("/api/resources",(req,res)=>{
    const resources = getResources()
    res.send(resources)
})
app.listen(PORT,()=>{
    console.log(`Example app listening at http://localhost:${PORT}`);
})