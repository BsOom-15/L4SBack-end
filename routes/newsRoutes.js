const express = require('express');
const News = require('../models/News');

const router = express.Router();


// Get All News:-
router.get('/', async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});


// Add News: 
router.post('/', async (req, res) => {


    const news = new News({
        title: req.body.title,
        content: req.body.content
    });

    try {
        const newNews = await news.save();
        res.status(200).json(newNews);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});


module.exports = router