const express = require('express');
const rateLimitMiddleware = require('./rateLimitMiddleware');
const proxyController = require('../controllers/ProxyControllers');

const router = express.Router();

// Apply rate limiting to the proxy route
router.use('/api-proxy', rateLimitMiddleware);

// Proxy all requests to the target API with caching
router.get('/api-proxy', async (req, res) => {
  try {
    await proxyController.proxyRequest(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
