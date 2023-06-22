require('dotenv').config();
 const express = require('express');
 const mongoose = require('mongoose');
 const bodyParser = require('body-parser');
 const multer = require('multer');
 const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');

 const app = express();
 const port = process.env.PORT || 3000;

 // Connect MongoDB
 mongoose.connect(process.env.MONGODB_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   //useCreateIndex: true,
   //useFindAndModify: false
 }).then(() => {
   console.log('Connected to MongoDB');
 }).catch(error => {
   console.error(error);
 });

 // Middleware
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 // Routes
 app.get('/', (req, res) => {
   res.send('Task Manager API');
 });

 // Start server
 app.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`);
 });