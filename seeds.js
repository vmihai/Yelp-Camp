var mongoose = require("mongoose");
var Comment = require("./models/comment");
var Campground = require("./models/campground");


var data = [];

for (i=1;i<51;i++){
  var name = i;
  var image = "https://s3.eu-west-2.amazonaws.com/furicurent/image"+ i + ".jpg";
  var description = "Cele mai tari glume si bancuri!";
  data.push({name: name, image: image, description: description});
}

function seedDB(){
  //remove all campgrounds
  Campground.remove({}, function(err){
    if (err){
      console.log(err)
    }else{
      console.log("removed campgrounds!");
      //add few campgrounds
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
          if (err){
            console.log(err);
          }else{
            console.log("added a campground");
            //create a comment
            Comment.create(
              {
                text: "Super gluma!",
                author: "Victor Mihaita"
              }, function(err, comment){
              if (err){
                console.log(err)
              }  else {
                console.log("created new comment");
                campground.comments.push(comment);
                campground.save();

              }
            });
          }
        });
      });
    }
  });
}

module.exports = seedDB;
