import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


// file importing 
import postRoutes from './routes/postRoutes.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


const CONNECTION_URL ='mongodb+srv://vaibhav_j143:9414725512ruby@cluster0.p53xw.mongodb.net/data?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5000;

app.use('/api/v1/posts',postRoutes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true})
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));

//   useFindAndModify:false

  mongoose.set('useFindAndModify', false);