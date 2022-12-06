import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';


process.env.MONGODB_URI='mongodb+srv://admin:admin@cluster0.d2py2e4.mongodb.net/task4?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('DB OK'))
.catch((err)=>console.log('DB ERROR',err))

const app = express();
app.use(cors())

app.use(express.json())

app.listen(process.env.PORT || 5000,(err) =>{
    if (err) {
        console.error(err);
    }
    console.log('server listening on port',5000)
})