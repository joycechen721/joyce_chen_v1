const express = require('express');
const app = express();
const autoprefixer = require('autoprefixer')
const ejs = require('ejs')
const postcss = require('postcss')

// postcss([ autoprefixer ]).process(css).then(result => {
//   result.warnings().forEach(warn => {
//     console.warn(warn.toString())
//   })
//   console.log(result.css)
// })

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render('index');
});

app.get("/cs31", function(req, res){
  res.render('cs31');
});

app.listen(process.env.PORT || 4000, function(){
  console.log("Server is running on port 4000.");
});
