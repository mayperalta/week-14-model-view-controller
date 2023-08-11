// Import modules
const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

// render Home (public)
router.get('/', async (req, res) => {
  try {
    req.body.user_id = req.session.user_id;
    const blogData = await Blog.findAll({
      include: [{
        model: User,
        attributes: {exclude: ['password']},
      }],
      order: [['created', 'DESC']]
    });
    const blogMap = blogData.map((blog) => blog.get({ plain: true }));
      res.render('homepage', {
      blogMap,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
    }
}); 

// render /dashboard (unique to user posts)
router.get('/dashboard', async (req, res) => {
  try {
    if (req.session.user_id) {
      const blogData = await Blog.findAll({
        where: {
          user_id: req.session.user_id
        },
        include: [{
          model: User,
          attributes: {exclude: ['password']},
        }],
        order: [['created', 'DESC']]
      });
      const blogMap = blogData.map((blog) => blog.get({ plain: true }));
      res.render('homepage', {
        blogMap,
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

// render /login
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
  } else {
    res.render('login');
  }
});

// render sign-up 
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to /dashboard (unique to user posts)
  if (req.session.logged_in) {
    res.redirect('/dashboard');
  } else {
    res.render('signup');
  }
});


module.exports = router;





// router.get('/', async (req, res) => {
//   try {
//     req.body.user_id = req.session.user_id
//     // Get all blog posts
//     const blogData = await Blog.findAll({

//     });
//     console.log(blogData)

//     const blogMap = blogData.map((blog) => blog.get({ plain: true }));
//     console.log(blogData)
//     // Pass serialized data and session flag into template
//     res.render('homepage', {
//       blogMap
//     });
//   } catch (err) {
//     console.log(err)
//     res.status(500).json(err);
//   }
// });






// router.get('/dashboard', async (req, res) => {

//     if (req.session.logged_in) {
//       res.render('dashboard');
//     } else {
//       res.redirect('/login');
//     }
// });


