const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Post }],
      });
    
      const user = userData.get({ plain: true });
    
        res.render('dashboard', {
          ...user,
          loggedIn: req.session.loggedIn,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.get('/post/:id', async (req, res) => {

  try {
      const postData = await Post.findByPk(req.params.id, {
      });
    
      const post = postData.get({ plain: true });
    
        res.render('editpost', {
          post,
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