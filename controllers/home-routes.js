const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// route to get all blog posts
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

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/post/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the post
    try {
      const singlePost = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: [
              'username',
            ],
          },
          // {
          //   model: Comment,
          //   attributes: [
          //     'text', 'user_id', 'post_id', 'date_created'
          //   ]
          // }
        ],
      });
      const post = singlePost.get({ plain: true });
      res.render('post', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;
