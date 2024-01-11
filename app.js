require('dotenv').config();
const express=require('express')

const cors=require('cors')

const userRoutes=require('./routes/users');
const authRoutes=require('./routes/auth');

const app=new express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth",authRoutes);




app.listen(4000,()=>{
    console.log("Port 3000 is up and running")
})
