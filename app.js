const express = require('express');
const ejs = require('ejs')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const _ = require('lodash')

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

const posts = [];
const today = new Date();
const options = {
  year: 'numeric',
};

//listTitle is for the footer partial
app.get("/", function(req, res){
  res.render('index', {title: "Joyce Chen", postsArr: posts, listTitle: today.toLocaleDateString("en-US", options)});
});

app.get("/cs31", function(req, res){
  res.render('cs31', {title: "CS31 Review", listTitle: today.toLocaleDateString("en-US", options)});
});

app.get("/blog", function(req, res){
  res.render('blog', {postsArr: posts, title: "Blog", listTitle: today.toLocaleDateString("en-US", options)});
})

app.get("/blog/:postname", function(req, res){
  const requestTitle = _.lowerCase(req.params.postname);
  posts.forEach(function(element){
    const postTitle = _.lowerCase(element.title);
    const postContent = element.input;

    if(postTitle == requestTitle){
      res.render('blogpost', {title: postTitle, blogTitle: postTitle, content: postContent, listTitle: today.toLocaleDateString("en-US", options)})
    }
  })
})

app.get("/compose", function(req, res){
  res.render('compose', {title: "Compose", listTitle: today.toLocaleDateString("en-US", options)});
})

app.post("/compose", function(req, res){
  const post = {
    title: req.body.title,
    input: req.body.newPost,
    url: req.body.url,
    url2: req.body.url2
  };
  posts.unshift(post);
  res.redirect("/#blog");
})

app.listen(process.env.PORT || 4000, function(){
  console.log("Server is running on port 4000.");
});
