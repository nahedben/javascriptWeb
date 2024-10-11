// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello response 1");
// });

// app.get("/blog", (req, res) => {
//   res.send("Hello Blog");
// });

// module.exports = app;

// const express = require("express");
// const app = express();

//begining of tutorial
// app.get("/", (req, res) => {
//   res.send("Hello Second test!");
// });

// app.get("/global", (req, res) => {
//   res.send("hello Global 2");
// });

// const postRoute = require("./routes/posts");
// app.use("/posts", postRoute);

// module.exports = app;

const express = require("express");

const postRoute = require("./routes/posts");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.use("/posts", postRoute);
// app.use("/post", postRoute);

module.exports = app;
