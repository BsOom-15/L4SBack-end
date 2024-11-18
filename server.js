const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// const partnerRoutes = require('./routes/partnerRoutes');
const newsRoutes = require('./routes/newsRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Express Is Running');
});

// DB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB Connection Error:', err));

// app.use('/api/partners', partnerRoutes);
app.use('/api/news', newsRoutes);
app.use('/api', contactRoutes);

app.listen(port, () => {
    console.log('Server Is Running :)');
});
