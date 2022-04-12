const router = require('express').Router();
const { Post, User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        })

        res.status(200).json(newPost);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    
});

module.exports = router;