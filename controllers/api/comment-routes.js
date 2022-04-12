const router = require('express').Router();
const { Comment, Post, User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newComment = await Post.create({
            text: req.body.comment,
            user_id: req.session.user_id,
            // post_id: 
        })

        res.status(200).json(newComment);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    
});

module.exports = router;