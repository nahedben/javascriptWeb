// const http = require("http");
// const app = require("./app");
// const port = 3000;

// const server = http.createServer(app);
// server.listen(port);

// const http = require("http");
// const app = require("./app");
// const port = 3000;
// const server = http.createServer(app);
// server.listen(port);

const http = require("http");
const port = 3000;
const app = require("./app");
const server = http.createServer(app);
server.listen(port);
