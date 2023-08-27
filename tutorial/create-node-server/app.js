const http = require("http");
const routes = require("./routes");
// learned how to send the html content

// const server = http.createServer((req, res) => {
//   // console.log(req.url,req.method,req.headers);
//   // checked the url, method =[Get, post], headers = some browser headers

//   res.setHeader("Content-type", "text/html");
//   res.write("<html>")
//   res.write("<head><title>Anuj Panwar here </title></head>")
//   res.write("<body><h1>Hello Anuj Panwar ka project hai ye</h1></body>")
//   res.write("</html>")
//   res.end(); // telling the node our response is end here

// });

const server = http.createServer(routes);
server.listen(3000);
