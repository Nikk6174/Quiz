import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';

const app = express();

// middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

// application port
const PORT = process.env.PORT || 8080;

// routes
app.get('/', (req, res) => {
    try{
        res.json("get status")
    }catch(error){
        res.json(error)
    }
})

app.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})