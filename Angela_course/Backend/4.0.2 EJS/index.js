import e from "express";

const app = e();
const port = 3000;

app.get("/", (req, res) => {
  res.rendar("index.ejs", {
    dayType: "a weekday",
    advice: "it's time to work hard",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
