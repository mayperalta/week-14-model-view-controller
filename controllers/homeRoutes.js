// Import modules
const router = require('express').Router();
const { Blog, User } = require('../models');

// routes to / which lists all blog posts
router.get('/', async (req, res) => {
  try {
    req.body.user_id = req.session.user_id;
    const blogData = await Blog.findAll({
      include: [{
        model: User,
        attributes: ['id', 'username'],
      }],
      order: [['created', 'DESC']]
    });
    const blogMap = blogData.map((blog) => blog.get({ plain: true }));
      res.render('homepage', {
      blogMap,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id 
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
    }
}); 

// routes to /login then redirects to dashboard when the user is successfully logged in 
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
  } else {
    res.render('login');
  }
});

// render /sign-up to create a new user 
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
  } else {
    res.render('signup');
  }
});


// renders /dashboard if a user is successfully logged in, otherwise redirects to /login
router.get('/dashboard', async (req, res) => {
  try {
    if (req.session.user_id) {
      const blogData = await Blog.findAll({
        where: {
          user_id: req.session.user_id
        },
        include: [{
          model: User,
          attributes: {include: ['id', 'username']},
        }],
        order: [['created', 'DESC']]
      });
      const blogMap = blogData.map((blog) => blog.get({ plain: true }));
      res.render('dashboard', {
        blogMap,
        logged_in: req.session.logged_in,
        user_id: req.session.user_id 
      });
      return;
    } else {
      res.redirect('/login')
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}); 

router.get('/post', (req,res) => {
  res.render('post',{logged_in: req.session.logged_in})

});

router.get('/update', (req,res) => {
  res.render('update',{logged_in: req.session.logged_in})

});
module.exports = router;

