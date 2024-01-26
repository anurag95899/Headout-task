const express = require('express');
const fs = require('fs');
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const DataPath = '/tmp/data/';

// Endpoint to handle GET requests with query parameters
app.get('/data', (req, res) => {
    const fileName = req.query.n;
    const lineNumber = req.query.m;

    if (!fileName) {
        return res.status(400).send('File name (n) parameter is required.');
    }

    const filePath = DataPath + fileName + '.txt';

    // Read entire file content if line number not provided
    if (!lineNumber) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(404).send('File not found.');
            }
            res.send(data);
        });
    } else {
        // Read specific line number from the file
        const lineStream = fs.createReadStream(filePath, { start: (lineNumber - 1) * 1024, end: lineNumber * 1024 });
        let content = '';
        lineStream.on('data', (chunk) => {
            content += chunk.toString();
        });
        lineStream.on('end', () => {
            res.send(content);
        });
    }
});

// check server connection
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
