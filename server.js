const express = require('express');
const app = express();
app.use(express.json());

const walletRoutes = require('./routes/walletRoutes');
app.use('/api/wallets', walletRoutes);

app.listen(3000, ()=> console.log("Bank Alzubair API running on port 3000"));
