var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var stories =  [
         {name: "Seal Of Star", image: "https://vignette.wikia.nocookie.net/saintseiya/images/4/49/Zeus_with_Kamui.jpg/revision/latest?cb=20121209212744"},
         {name: "Return of Chicken", image: "https://comicvine1.cbsistatic.com/uploads/original/11133/111330079/6530318-saigafurinji1.png"},
         {name: "Betrayal and Broken Heart", image: "https://www.anime-planet.com/images/manga/covers/masca-2560.jpg?t=1495142357"}
];
      
app.get("/", function(red, res){
   res.render("landing"); 
});
//show all quests- first restful route
app.get("/quests", function(req, res){

      
    res.render("quests", {quests: stories});
});

app.post("/quests", function(req, res){
    //get data from form and add to quests array
    var name = req.body.name;
    var image = req.body.image;
    var newQuest = {name: name, image: image};
    stories.push(newQuest);
    //redirect back to quests page
    res.redirect("/quests");
});

app.get("/quests/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Stories server has started!");
});