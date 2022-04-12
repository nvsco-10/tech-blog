const router = require('express').Router();
const { Comment, Post, User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_text: req.body.comment,
            user_id: req.session.user_id,
            post_id: req.body.postId
        })

        res.status(200).json(newComment);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    
});

module.exports = router;