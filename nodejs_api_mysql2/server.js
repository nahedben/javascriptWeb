// const express = require("express");
// const cors = require("cors");

// const app = express();

// var corsOption = { origin: "http://localhost:8081" };

// app.use(cors(corsOption));

// app.use(express.json());

// app.use(express.urlencoded({ extend: true }));

// const db = require("./app/models");
// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: ");
//   });

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// app.get("/", (req, res) => {
//   res.json({ message: "Wellcome to the new app" });
// });

// require("./app/routes/tutorial.routes")(app);

// //set,port listen for requests
// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT},`);
// });

const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = { origin: "http://localhost:8081" };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extend: true }));

const db = require("./app/models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Syncronized db");
  })
  .catch((err) => {
    console.log("Failed to sync");
  });

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and resync db");
// });

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to my app" });
// });

require("./app/routes/tutorial.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listen to port ${PORT}`);
});
