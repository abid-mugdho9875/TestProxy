const ProxyModel = require('../models/ProxyModel');

class ProxyController {
  static async proxyRequest(req, res) {
    try {
      // Call ProxyModel.fetchData with parameters and headers
      const data = await ProxyModel.fetchData(req.query);
      res.status(200).json(data);
    } catch (error) {
      console.error('Proxy Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = ProxyController;
