const express = require("express");

app = express();

app.use(express.urlencoded({ extended: false }));
app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime
app.get("/", function (req, res) {
  res.send(
    "<form action ='/store-user' method='POST'><label>Your Name</label type='text'><input type='text', name='username'></input><button>Submit</button></from>"
  );
}); //localhost:3000/

app.post("/store-user", function (req, res) {
  const userName = req.body.username;
  console.log(userName);
  res.send("<h1>Username stored!</h1>");
});
app.listen(3000);
