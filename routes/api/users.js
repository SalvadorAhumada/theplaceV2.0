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
      User.findOne({googleId: req.body.googleId})
      .then(res => {
        if(res.favorites.indexOf(req.body.site) !== -1) { 
          // Element already exists
          return;
        } else { 
          let newFavorites = [...res.favorites,req.body.site]
          User.update({
            googleId: req.body.googleId
          }, {
            $set: { 
              favorites: newFavorites
            }
          },(err, user) => {
            if (err) throw error
            console.log('saved ', req.body.site)
          })
        }
      })
      .catch(err => console.log(err))
    break;
    case 'deleted':
      User.findOne({googleId: req.body.googleId})
      .then(res => {
        let new_favorites = res.favorites;

        let index = new_favorites.indexOf(req.body.site);

        let deleted_number = new_favorites.splice(index,1);
        
        User.update({
          googleId: req.body.googleId
        }, {
          $set: { 
            favorites: new_favorites
          }
        },(err, user) => {
          if (err) throw error
          console.log('deleted ', req.body.site)
        })
        .catch(err => console.log(err))
      })
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