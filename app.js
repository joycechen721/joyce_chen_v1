const express = require('express');
const app = express();
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

// postcss([ autoprefixer ]).process(css).then(result => {
//   result.warnings().forEach(warn => {
//     console.warn(warn.toString())
//   })
//   console.log(result.css)
// })

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/cs31", function(req, res){
  res.sendFile(__dirname + "/cs31.html");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000.");
});
