// require("babel-register");
const os = require("os");
const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, {
            "Content-Type": "text/html",
        });
        res.write("<h1>Hello</h1>\n");
        res.end();
    } else if (req.url == "/test") {
        fs.readFile("test.txt", "utf8", (err, data) => {
            if (err) {
                send404(res);
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html",
                });
                res.write(data);
                res.end();
            }
        });
    } else {
        send404(res);
    }
}).listen(8080);

function send404(res) {
    res.writeHead(404, {
        "Content-Type": "text/html",
    });
    res.write("<span style='color: red'>Erreur 404</span>");
    res.end();
}
