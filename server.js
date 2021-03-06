const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const routes = require('./routes/routes')


const app = express();

// connect mongoose
mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost:27017/Beef', { useNewUrlParser: true , useUnifiedTopology: true }
  )
  mongoose.connection.on('error', err => {
    console.log(`Mongoose connection err:\n${err}`)
  })
  
  
  // parsing middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  // Add routes, both API and view
  app.use('/routes', routes);
  
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  
  
  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });




const port = process.env.PORT || 5000;
app.listen(port);

console.log(`server listening on ${port}`);