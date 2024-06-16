const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/index')
const bodyparser = require('body-parser')
const app = express();
const cors = require('cors')

app.use(bodyparser.json());
app.use(cors());
app.use(productRoutes)




mongoose.connect("mongodb://localhost:27017/Shopping",{}).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Error", err)
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Application is running on port${port}`)
})