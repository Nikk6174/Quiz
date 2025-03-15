import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';

// import connection file
import connect from './database/conn.js';


const app = express();

// middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

// application port
const PORT = process.env.PORT || 8080;

// routes
app.use('/api', router); 


app.get('/', (req, res) => {
    try{
        res.json("get status")
    }catch(error){
        res.json(error)
    }
    
})



// start server only for valid connection
connect().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})
