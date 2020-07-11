const express = require("express");
const app = express();
const mongoose = require("mongoose");

//mongoDB connection link
const dbURI =
  "mongodb+srv://netninja:test1234@blogtut.iaosj.mongodb.net/note-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("coonect to db");
  })
  .catch((err) => {
    console.log(err);
  });
/*   .then((result) => app.listen(3000));
.catch((err) => {
  console.log(err);
}); */
app.listen(3000, () => {
  console.log(`Server started on port`);
});
//homepage routing
app.get("/", (req, res) => {
  res.sendFile("./view/index.html", { root: __dirname });
});
//adding css file
app.use(express.static("./view"));

//about routing
app.get("/about", (req, res) => {
  res.sendFile("./view/about.html", { root: __dirname });
});

//redirecting
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page
app.use((req, res) => {
  res.sendFile("./view/404.html", { root: __dirname });
});
//new module create
