import  express   from "express";
import cors from 'cors'
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config()
import router from "./routes/index.js";


const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.REACT_DATABASE_URL)
    console.log('connectDB');
  } catch (error) {
    console.log(error.message); 
  }
}
mongoDB()





const PORT = 5000



const app = express()
app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
}))
app.use(express.json())


app.use("/api/v1", router)





app.listen(PORT, ()=>{
  console.log(`Server started on port ${PORT}`);
})

