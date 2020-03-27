const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// routes
const books = require('./routes/api/books');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config

const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log(err))

// Use Routes
app.use('/api/books', books);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}


// To deploy to heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at ${port}`));
