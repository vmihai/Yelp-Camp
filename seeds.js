var mongoose = require("mongoose");
var Comment = require("./models/comment");
var Campground = require("./models/campground");


var data = [
  {
    name:"Bucegi",
    image:"http://wallpapere.org/wp-content/uploads/2011/06/wallpapere-munti-natura.jpg",
    description:"asd asd asd as fas fsfas fas fsa fa sfa sf asf"},
  {
    name:"Fagaras",
    image:"http://www.util21.ro/relaxare/poze/munte/hymalaya.jpg",
    description:"asd asd asd as fas fsfas fas fsa fa sfa sf asf"},
  {
    name:"Godeanu",
    image:"http://wallpapere.org/wp-content/uploads/2011/05/munte_inzapezit_poiana_insorita_hd.jpg",
    description:"asd asd asd as fas fsfas fas fsa fa sfa sf asf"},
  {
    name:"Negoiu",
    image:"http://muntii-bucegi.ro/img/Bucegi_vedere.jpg",
    description:"asd asd asd as fas fsfas fas fsa fa sfa sf asf"},
  {
    name:"Vama Veche",
    image:"http://store03-1.peteava.ro/c1d1/da/fb/382532.jpg?token=ebe2544b23becb96",
    description:"asd asd asd as fas fsfas fas fsa fa sfa sf asf"},
  {
    name:"Mamaia",
    image:"http://www.peisaje-montane.ro/poze_peisaje_wallpaper_bucegi_valea_prahovei/imagini_desktop/poze_munte_medii/medii-bucegi-valea-prahovei-47.jpg",
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
