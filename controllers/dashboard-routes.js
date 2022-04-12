const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        const blogPosts = await Post.findAll({
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        });
    
        const posts = blogPosts.map((post) =>
          post.get({ plain: true })
        );
    
        res.render('dashboard', {
          posts,
          loggedIn: req.session.loggedIn,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.get('/newpost', async (req, res) => {
    res.render('newpost', { loggedIn: req.session.loggedIn });
    
});


module.exports = router;