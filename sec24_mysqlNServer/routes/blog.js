const express = require("express");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/posts");
});

router.get("/posts", async function (req, res) {
  const query = `
    select p.*, a.name as quthor_name  
    from blog.posts p join blog.authors a 
        on p.author_id = a.id
    `;
  const [posts] = await db.query(query);
  res.render("posts-list", { posts: posts });
});

router.get("/new-post", async function (req, res) {
  const [authors] = await db.query("select * from authors");
  res.render("create-post", { authors: authors });
});

router.post("/posts", async function (req, res) {
  req.body;
  const data = [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author,
  ];
  await db.query(
    "insert into blog.posts (title, summary, body, author_id ) values (?)",
    [data]
  );
  res.redirect("/posts");
});

router.get("/posts/:id", async function (req, res) {
  const query = `
  select p.* , a.name as author_name , a.email as author_email 
  from posts p 
  join authors a on p.author_id = a.id
  where p.id = ?`;

  const [posts] = await db.query(query, [req.params.id]);

  if (!posts || posts.length === 0) {
    return res.status(404).render("404");
  }

  const postData = {
    ...posts[0],
    date: posts[0].date.toISOString,
    humanReadableDate: posts[0].date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  res.render("post-detail", { post: postData });
});

router.get("/posts/:id/edit", async function (req, res) {
  const query = `
    select  * 
    from blog.posts p 
    where id = ? 
    `;
  const [posts] = await db.query(query, [req.params.id]);
 
 if (!posts || posts.length ===0 ) {
    return res.status(404).render('404');
 }
 
  res.render("update-post", {post: posts[0]});
});

module.exports = router;
