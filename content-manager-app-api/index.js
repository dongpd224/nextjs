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

// Phiên dịch json được đổ về từ API 
app.use(express.json())

// HTTP logger
app.use(morgan('combined'));

// Set route
app.get("/api/resources",(req,res)=>{
    const resources = getResources()
    res.send(resources)
})
// Route to path
app.get("/api/resources/:id",(req,res)=>{
    const resources = getResources()
    const {id} = req.params
    const resource = resources.find( resource => resource.id === id )
    res.send(resource)
})

// post request
app.post("/api/resources",(req,res)=>{
    const resources = getResources()
    const resource = req.body

    resource.createdAt = new Date()
    resource.status = "inactive"
    resource.id = Date.now().toString()
    resources.push(resource)

    fs.writeFile(pathToFile, JSON.stringify(resources,null,2),(error) =>{
        if(error){
            return res.status(422).send("Cannot store data in the file!")
        }
        return  res.send("Data has been saved")
    })

   
})


app.listen(PORT,()=>{
    console.log(`Example app listening at http://localhost:${PORT}`);
})