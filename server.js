const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const routes = require("./routes");


const app = express();

// parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

 

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/Beef', { useNewUrlParser: true }
  )
  mongoose.connection.on('error', err => {
    console.log(`Mongoose connection err:\n${err}`)
  })





const port = process.env.PORT || 5000;
app.listen(port);

console.log(`,enu component listening on ${port}`);