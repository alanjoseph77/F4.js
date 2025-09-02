/**
 * 4.js Development Server
 * Copyright © 2025 Alan and Alisha - 4.js Library
 */

import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join, extname } from 'path';

const PORT = 8080;
const ROOT_DIR = process.cwd();

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2'
};

const server = createServer((req, res) => {
    let filePath = join(ROOT_DIR, req.url === '/' ? '/index.html' : req.url);
    const ext = extname(filePath);
    const contentType = mimeTypes[ext] || 'text/plain';

    try {
        const content = readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    } catch (error) {
        res.writeHead(404);
        res.end('4.js Dev Server - File not found');
    }
});

server.listen(PORT, () => {
    console.log(`4.js Development Server running at http://localhost:${PORT}`);
});
