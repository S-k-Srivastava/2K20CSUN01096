
const http = require('http');
const url = require('url');
const axios = require('axios');

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const queryParameters = parsedUrl.query;
    const path = parsedUrl.pathname;

    if (path === '/') {
        const jsonUrl = queryParameters.url;
        if (!jsonUrl) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Please provide a "url" parameter in the query string.');
            return;
        }

        try {
            const response = await axios.get(jsonUrl);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response.data));
        } catch (error) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Error fetching JSON data from the provided URL.');
        }
    } else if (path === '/numbers') {
        const jsonUrl = queryParameters.url;
        if (!jsonUrl) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Please provide a "url" parameter in the query string.');
            return;
        }

        try {
            const response = await axios.get(jsonUrl);
            const numbers = response.data.numbers;
            if (!Array.isArray(numbers)) {
                throw new Error('The fetched JSON data does not contain an array of numbers.');
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(numbers));
        } catch (error) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Error fetching JSON data from the provided URL or the data does not contain an array of numbers.');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid path.');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
