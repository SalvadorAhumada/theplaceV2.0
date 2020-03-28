const express = require('express');
const router = express.Router();

// Bring our book model
const Book = require('../../models/book');

router.get('/', (req,res) => {
    Book.find()
        // To sort elements by date in descendent order
        // .sort({ date: -1})
        .then(books => res.json(books))
        .catch(err => console.log(err));
});

router.post('/', (req,res) => {

    console.log(req.body);
    
    const newBook = new Book({
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        year:req.body.year
    });

    newBook.save()
        .then(() => res.json('Book Added!'))
        .catch(err => res.status(400).json('Error at adding book: ' + err));
})

module.exports = router;