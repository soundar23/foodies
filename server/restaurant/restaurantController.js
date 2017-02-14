const logger = require('./../../applogger');
const restaurant = require('./restaurantEntity');
let restaurantController = {

    addrestaurant: function(req, res) {
        logger.debug('Inside user post');
        let db = new restaurant(req.body);
        db.save(function(err) {
            if (err) {
                res.send("Error:" + err);
            } else {
                res.send("Added restaurant successfully");
            }
        });
    },
    deleterestaurant: function(req, res) {
        logger.debug("Inside user post");
        let id = req.body.resId;
        //.	let id=new userModel(req.body.resId);
        restaurant.remove({
            "resId": id
        }, function(err) {
            if (err) {
                res.send("Error:" + err);
            } else {
                res.send("Deleted restaurant successfully");
            }
        });
    },
    updaterestaurant: function(req, res) {
        let id = req.body.resId;
        let comment = req.body.resComments;
        // userModel.update({"resId":req.body.resId}, function(err,docs){
        restaurant.update({
            "resId": id
        }, {
            $set: {
                "resComments": comment
            }
        }, function(err) {
            if (err) {
                res.send("Error:" + err);
            }
            // else if(docs!=null){
            //  //  res.send("changed");
            //  res.send("Updated restaurant successfully")
            // } else {
                res.send("Updated restaurant successfully");
            });
    },

    findrestaurant: function(req, res) {
        restaurant.find(function(err, docs) {
            if (err) {
                res.send("Error:" + err);
            } else if (docs !== null) {
                res.send(docs);
                // res.send("Fetched restaurant successfully")
            } else {
                res.send("Read Restaurant successfully");
            }
        });
    }

}
module.exports = restaurantController;
