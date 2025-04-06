const express = require('express');
const cors = require('cors');
const cardsRoutes = require('./routes/cards');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/cards', cardsRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
