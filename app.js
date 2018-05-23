var express=require("express");
var app=express();

app.set("view engine","ejs");

app.get("/",function(req,res){
 res.render("landing");
 });
 
 app.get("/:campgrounds",function(req,res){
 
var campgrounds=[
{ name:"italy",
 image:"https://pixabay.com/get/ea31b0082df1033ed1584d05fb1d4e97e07ee3d21cac104497f7c17faee4b0bf_340.jpg"},
 {
 name:"france",
 image:"https://pixabay.com/get/ea31b00f2af6003ed1584d05fb1d4e97e07ee3d21cac104497f7c17faee4b0bf_340.jpg"}
 ]
 
 res.render("campgrounds",{campgrounds:campgrounds});
 });
 
 app.listen(process.env.PORT,process.env.ID,function(){
 console.log("Yelp camp stared");
 });
