const express=require("express");
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
require("dotenv").config();
const cors=require("cors");

const mongoose=require("mongoose")

const app=express();
app.use(express.json());

app.use(cors());

app.use("/users",userRouter);
app.use("/notes",noteRouter);


app.get("/",(req,res) =>{
    res.send("Notes Api");
})

const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,(error) =>{
        if(error) throw error;
        console.log("server started on port on." +PORT);
    })
})
.catch((error)=>{
console.log(error);
})
