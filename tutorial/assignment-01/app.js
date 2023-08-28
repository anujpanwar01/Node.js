const http = require("http");

const server = http.createServer(function (req, res) {
  switch (req.url) {
    case "/users":
      res.write(`
        <html>
         <head>
          <title>users route hai </title>
         </head>
         <body>
          <ul>
           <li>anuj</li>
           <li>abhishek</li>
           <li>sanjeev</li>
           <li>mayank</li>
          </ul>
         </body>
        </html>`);
      return res.end();

    case "/create-user" && req.method === "POST":
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });
      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString(); // globally available via node
        console.log(parsedBody);
      });
      req.statusCode = 400;
      return res.end();
    default:
      res.write(`
        <html>
         <head>
          <title>simple text</title>
         </head>
         <body>
          <h1>hello welcome guys</h1>
          <form action='/create-user' method='POST'>
           <input type="text" name='/create-user'/>
           <button type="submit">submit</button>
          </form>
         </body>
        </html>`);
      return res.end();
  }
});
server.listen(3000);
