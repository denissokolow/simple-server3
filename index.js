const http = require('http');
const fs = require('fs');
const PORT = 80;
const server = http.createServer();
server.listen(process.env.PORT || PORT);
server.on('request', (req, res) => {
    switch(req.url) {
        case '/static':{
            res.writeHead(200, {
                'Content-Type': 'application/pdf; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            });
            fs.readFile('./files/static.pdf', (err, data) => { 
                if (err) {
                    console.error(err)
                    return
                }
            res.end(data)
            })
           }
        case '/primer': {
            res.writeHead(200, {
                'Content-Type': 'text/ html; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            });
            fs.readFile('./files/primer.txt', (err, data) => {
                if (err) {
                    console.error(err)
                    return
                }
                res.end(data)
            })
        }
        default: {
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            });
            fs.readFile('./files/index.html', (err, data) => {
                if (err) {
                    console.error(err)
                    return
                }
                res.end(data)
            })
        }
    }
})