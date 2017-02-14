'use strict';
const router = require('express').Router();
const restaurant = require('./restaurantEntity');
const restaurantController = require('./restaurantController');

router.post('/addrestaurant', restaurantController.addrestaurant);
router.delete('/deleterestaurant', restaurantController.deleterestaurant);

router.get('/findrestaurant', restaurantController.findrestaurant);

router.put('/updaterestaurant', restaurantController.updaterestaurant);
// router.delete('/delete', function(req, res){
// 	logger.debug("Inside user post");
// 	let db= new user(req.body);
// 	db.delete();
// 	db.send("Added successfully");
// 	})
// logger.debug("Received request"+JSON.stringify(req.body));
// if(req.body)
// {
//   let user = new userModel(req.body);
//   user.save(function(err){
//   if(err){
//     res.send(err);
//   }
//   else{
//      res.json({message:'User saved successfully'});
//   }
//   });
// }

// Get details of all users in the system
router.get('/', function(req, res) {

    res.send('response from user GET route check');
});

module.exports = router;
