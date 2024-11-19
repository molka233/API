const express= require('express');
const app=express();

app.use(express.json());


require('dotenv').config();
PORT=process.env.PORT;
const connectDB=require("./config/connectDB");
connectDB();

app.use('/api/user',require('./Routes/User'))
app.listen(PORT,err => {
    err ? console.log('fail to connect'):
    console.log(`server running at ${PORT}`)
}
)