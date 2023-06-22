const mongoose = require('mongoose');

 const taskSchema = new mongoose.Schema({
   title: {
     type: String,
     required: true
   },
   description: {
     type: String,
     required: true
   },},
   creatdate: {
     type: Date
     default: Date.now
   },
   duedate: {
     type: Date
   },
   owner: {
     type: mongoose.Schema.Types.ObjectId,
     required: true,
     ref: 'User'
   },
   status: {
     type: String,
     default: open
     enum: ['open', 'in progess', 'completed']
   },
   completed: {
     type: Boolean,
     default: false
   }, 
   {
   timestamps: true
 });

 const Task = mongoose.model('Task', taskSchema);

 module.exports = Task;