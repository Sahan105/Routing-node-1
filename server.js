const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");

  let path = "./view/";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Server is listening the port 3000");
});
