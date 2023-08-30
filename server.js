require('dotenv').config();
const express = require('express');
const app = express();
const userController = require('./controllers/user');
const taskController = require('./controllers/task');
const notesController = require('./controllers/notes')
const projectController = require('./controllers/projects')
const cors = require('cors');
const morgan = require('morgan')
const PORT = process.env.PORT || 4000;
	
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use('/user', userController);
app.use('/task', taskController);
app.use('/notes', notesController);
app.use('/project', projectController)


app.get('/', function(req, res) {
    res.json('Hello World!');
  });
  


app.listen(4000, function() {
    console.log('Listening on port 4000');
});
