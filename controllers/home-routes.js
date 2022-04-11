const router = require('express').Router();
const Post = require('../models/Post');

// route to get all blog posts
router.get('/', async (req, res) => {
  const blogPosts = await Post.findAll().catch((err) => { 
      res.json(err);
    });
      const posts = blogPosts.map((post) => post.get({ plain: true }));
      res.render('all', { posts });
    });


module.exports = router;
