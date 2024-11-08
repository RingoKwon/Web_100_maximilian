import e from "express";

const app = e();
const port = 3000;

app.get("/", (req, res) => {
  const d = new Date();
  const weekOfDay = d.getDay();

  let type = "a weekday";
  let adv = "it's time to work hard";

  if (weekOfDay === 0 || weekOfDay === 6 || weekOfDay === 5) {
    type = "a weekend";
    adv = "have some fun";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
