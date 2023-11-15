const express = require('express');
const proxyController = require('./controllers/ProxyControllers');


const app = express();
const PORT = process.env.PORT || 3000;



// Middleware to parse JSON requests
app.use(express.json());

// Proxy route
app.get('/api-proxy', async (req, res) => {
  await proxyController.proxyRequest(req, res);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
