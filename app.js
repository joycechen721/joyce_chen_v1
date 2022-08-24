const express = require('express');
const app = express();
const ejs = require('ejs')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

const posts = [];

app.get("/", function(req, res){
  res.render('index');
});

app.get("/cs31", function(req, res){
  res.render('cs31');
});

app.get("/blog", function(req, res){
  res.render('blog', {postsArr: posts});
})

app.get("/compose", function(req, res){
  res.render('compose');
})

app.post("/compose", function(req, res){
  const post = {
    title: req.body.title,
    input: req.body.newPost
  };
  posts.push(post);
  res.redirect("/blog");
})

app.listen(process.env.PORT || 4000, function(){
  console.log("Server is running on port 4000.");
});
