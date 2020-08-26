const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 80;
const server = http.createServer();
server.listen(process.env.PORT || PORT);
server.on('request', (req, res) => {
    if (req.url === '/text') {
            res.writeHead(200, {
                'Content-Type': 'text/ html; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            });
            fs.readFile(path.join(__dirname, 'files', 'primer.txt'), (err, data) => {
                if (err) {
                    console.error(err)
                    return
                }
                res.end(data)
            })
    }else if (req.url === '/pdf'){
            res.writeHead(200, {
                'Content-Type': 'application/pdf; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            });
            fs.readFile(path.join(__dirname, 'files', 'static.pdf'), (err, data) => { 
                if (err) {
                    console.error(err)
                    return
                }
            res.end(data)
            })
    } else {       
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
})