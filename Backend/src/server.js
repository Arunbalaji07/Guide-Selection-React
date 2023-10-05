import express, {urlencoded} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from "./router.js";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb+srv://arunbalaji07:arunbalaji07@prebuild.cdvwgyn.mongodb.net/guide-selection")

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//   app.use('/', (req,res) => {
//      res.json({message: 'hello'})
//  })

app.use('/api', router)
export default app