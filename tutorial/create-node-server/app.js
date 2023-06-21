const http = require("http");
const fileSystem = require("fs")
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



const server = http.createServer((req, res) => {
    const URL = req.url;
    const method = req.method;
    if (URL === "/") {
        res.write("<html>")
        res.write("<head><title>Anuj Panwar here </title></head>")
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'></input><button type='submit'>submit</button></form></body>")
        res.write("</html>")
        return res.end();
    }
    if (URL === "/message" && method === "POST") {
        const body = []
        req.on("data", (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString(); // globally available via node
            const message = parsedBody.split("=")[1];
            fileSystem.writeFileSync("messge.txt", message) //creating a file
        })

        res.statusCode = 302 // redirection
        res.setHeader("Location", "/")
        return res.end()
    }
    res.write("<html>")
    res.write("<head><title>Anuj Panwar here </title></head>")
    res.write("<body><h1>Hello Anuj Panwar ka project hai ye</h1></body>")
    res.write("</html>")
    res.end(); // telling the node our response is end here

});
server.listen(3000);
