const express = require('express');
const router = express.Router();

// Bring our book model
const User = require('../../models/user');

router.get('/', (req,res) => {
    User.find()
        // To sort elements by date in descendent order
        // .sort({ date: -1})
        .then(users => res.json(users))
        .catch(err => console.log(err));
});

router.post('/', (req,res) => {
    
    const newUser = new User({
        googleId:req.body.googleId,
        favorites:[]
    });

    newUser.save()
        .then(() => res.json('User Added!'))
        // .then(() => res.json(res))
        .catch(err => res.status(400).json('Error at adding user: ' + err));
})

router.patch('/', (req,res) => {
  switch(req.body.actionType) {
    case 'saved':
          const newFavorite = req.body.site;
          User.findOneAndUpdate({googleId: req.body.googleId},{$push : {favorites:newFavorite}}, {new:true},(error, user) => {
            if(error)
              console.log(error)
            else
               {
                res.json(user)
               }
         });
    break;
    case 'deleted':
      const remove = req.body.site;
      User.findOneAndUpdate({googleId: req.body.googleId},{$pull : {favorites:remove}}, {new:true},(error, user) => {
        if(error)
          console.log(error)
        else
           {
            res.json(user)
           }
     });
    break;
    default:
      return;
  }
});

router.get('/', (req,res) => {

  User.findOne({googleId: req.body.googleId})
    .then(res => res.json(users))
    .catch(err => console.log(err))
});


module.exports = router;