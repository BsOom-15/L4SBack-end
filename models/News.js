const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, default: new Date().toISOString() }
});

module.exports = mongoose.model('News', newsSchema);
