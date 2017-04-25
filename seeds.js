var mongoose = require("mongoose");
var Comment = require("./models/comment");
var Campground = require("./models/campground");


var data = [
  {
    name:"Bucegi",
    image:"https://ro.wikipedia.org/wiki/Fișier:Vedere_panoramica.JPG",
    description:"asd asd asd as fas fsfas fas fsa fa sfa sf asf"},
  {
    name:"Fagaras",
    image:"https://ro.wikipedia.org/wiki/Fișier:PozeDiham_18.05.2008_(4).JPG",
    description:"asd asd asd as fas fsfas fas fsa fa sfa sf asf"},
  {
    name:"Godeanu",
    image:"https://ro.wikipedia.org/wiki/Fișier:Bucegi_2009-7_5.jpg",
    description:"asd asd asd as fas fsfas fas fsa fa sfa sf asf"},
  {
    name:"Negoiu",
    image:"https://ro.wikipedia.org/wiki/Fișier:Cascada_Spumoasa_Bucegi.jpg",
    description:"asd asd asd as fas fsfas fas fsa fa sfa sf asf"},
  {
    name:"Vama Veche",
    image:"https://ro.wikipedia.org/wiki/Fișier:Varful_Bucsoiu,_2492m,_Muntii_Bucegi.jpg",
    description:"asd asd asd as fas fsfas fas fsa fa sfa sf asf"},
  {
    name:"Mamaia",
    image:"https://ro.wikipedia.org/wiki/Fișier:Floare_de_altitudine_in_Muntii_Bucegi.jpg",
    description:"asd asd asd as fas fsfas fas fsa fa sfa sf asf"},
]

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
                text: "this place is great, but I wish there was internet",
                author: "Homer"
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
