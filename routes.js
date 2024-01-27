const requestHandlers = (req,res) => {
    if(req.url === "/") {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<html>');
        res.write('<body>')
        res.write('<form method="POST" action="/create-user">')
        res.write('<input name="username" placeholder="Enter Username" />')
        res.write('<button type="submit">Submit</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    }

    if(req.url === '/create-user' && req.method === 'POST') {
        const data = [];

        req.on('data', (chunk) => {
            data.push(chunk);
        });

        req.on('end', () => {
            const parsedData = Buffer.concat(data).toString();
            const body = new URLSearchParams(parsedData)
            console.log(body.get('username'));

            res.statusCode = 302;
            res.setHeader('Location', "/");
            res.end();
        })
    }

    if(req.url === '/users' && req.method === 'GET') {
        res.write('<html>');
        res.write('<body>')
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    }
}

module.exports = requestHandlers