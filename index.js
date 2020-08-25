const http = require('http');
const fs = require('fs');
const PORT = 80;
const server = http.createServer();
server.listen(process.env.PORT || PORT);
server.on('request', (req, res) => {

    switch(req.url) {
        case '/static':{
            res.writeHead(200, {
                'Content-Type': 'text/javascript; charset=utf-8', //испр контент тайп
                'Access-Control-Allow-Origin': '*'
            });
            fs.readFile('/Users/flavio/test.txt', (err, data) => { //испр адрес
                if (err) {
                    console.error(err)
                    return
                }
                res.end(data)
            })

        }

    }
   



})