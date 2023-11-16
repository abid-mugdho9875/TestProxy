
const express = require('express');
const proxyRoutes = require('./routes/ProxyRoutes');


const app = express();
const PORT = process.env.PORT || 3000;


// API proxy routes
app.use('/', proxyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});