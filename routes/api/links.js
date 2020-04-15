const express = require('express');
const router = express.Router();

// Bring our book model
const Link = require('../../models/link');

router.get('/', (req,res) => {
    Link.find()
        // To sort elements by date in descendent order
        // .sort({ date: -1})
        .then(links => res.json(links))
        .catch(err => console.log(err));
});

router.post('/', (req,res) => {
    
    const newLink = new Link({
        title:req.body.name,
        author:req.body.url,
        genre:req.body.file,
        year:req.body.description,
        likes:req.body.likes,
        dislikes:req.body.dislikes
    });

    newLink.save()
        .then(() => res.json('Link Added!'))
        // .then(() => res.json(res))
        .catch(err => res.status(400).json('Error at adding link: ' + err));
})

router.delete('/:id',(req,res) => {
    Link.findById(req.params.id)
        .then(link => link.remove().then(() => res.json({ success: true})))
        .catch(err  => res.status(404).json({ success: false}))
});

module.exports = router;