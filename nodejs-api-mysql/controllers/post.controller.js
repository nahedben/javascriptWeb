// function index(req, res) {
//   const posts = "Post lists";
//   res.send(posts);
// }

// module.exports = { index: index };

const models = require("../models");

async function save(req, res) {
  const post = {
    title: req.body.title,
    content: req.body.content,
    image_url: req.body.image_url,
    categoryId: req.body.categoryId,
    userId: 1,
  };
  models.Post.create(post)
    .then((result) => {
      res.status(201).json({
        message: "Post created successfully",
        post: result,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// function home(req, res) {
//   const emplList = "Here is all employer list";
//   res.get(emplList);
// }

module.exports = { save: save };
