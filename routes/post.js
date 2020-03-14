const express = require('express');
const Post = require('../models/post');

const router = express.Router();


// Routes
router.get('/', (req, res) => {
    res.send('POST PAGE');
});

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description:req.body.description
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message:err});
        });
});
// Used previously to make a simple post
// router.post('/', (req, res) => {
//     console.log(req.body);
// });


// Exporting the router function
module.exports = router;
