const fileSystem = require("fs");

const requestHandler = (req, res) => {
  const URL = req.url;
  const method = req.method;
  if (URL === "/") {
    res.write("<html>");
    res.write("<head><title>Anuj Panwar here </title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'></input><button type='submit'>submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (URL === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); // globally available via node
      const message = parsedBody.split("=")[1];
      fileSystem.writeFileSync("messge.txt", message, (err) => {
        console.log(err);
      }); //creating a file
    });

    res.statusCode = 302; // redirection
    res.setHeader("Location", "/");
    return res.end();
  }

  res.write("<html>");
  res.write("<head><title>Anuj Panwar here </title></head>");
  res.write("<body><h1>Hello Anuj Panwar ka project hai ye</h1></body>");
  res.write("</html>");
  res.end(); // telling the node our response is end here
};
module.exports = requestHandler;
// export default requestHandler;
