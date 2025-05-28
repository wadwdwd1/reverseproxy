// server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Target Eaglercraft server
const targetServer = 'http://france.elementiamc.xyz:2142';

// Setup the reverse proxy
app.use('/', createProxyMiddleware({
  target: targetServer,
  changeOrigin: true,
  logLevel: 'debug', // Optional: to log requests and responses
  onProxyReq: (proxyReq, req, res) => {
    // Optionally modify headers or request data
    console.log(`Proxying request to: ${targetServer}${req.url}`);
  }
}));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Reverse proxy server running on port ${port}`);
});
