require('dotenv').config();         // import contents of .env file
const express = require('express');     // express  
require('./db/mongoose'); // mongoose db connect
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');

const app = express();
//
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
//Listen for connetion on port
app.listen(port, () => {    
    console.log(`Server Started at ${port}`)
})
