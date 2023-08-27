// Import modules
const router = require('express').Router();
const { Blog, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');



// create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    // req.body.user_id = req.session.user_id
    const newPost = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      created: req.body.created,
      user_id: req.session.user_id
      });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update current post
// update /api/posts/:id
router.put ('/:id', withAuth,async (req, res) => {
  try {
    const blogData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    }); 
    // if (!blogData[0]) {
    //   res.sendStatus(404).json({ message: 'No Workout data found with that id!' });
    //   return;
    // }
    res.sendStatus(200).json(blogData);
  }
    catch (err) {
    res.sendStatus(500).json(err);
    }
}); 


// delete an existing post
router.delete('/:id', withAuth, async (req, res) => {

  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });
    console.log(blogData)

    if (!blogData) {
      res.sendStatus(404).json({ message: 'No post found with this user!' });
      return;
    }

    res.sendStatus(200).json(blogData);
  } catch (err) {
    console.log(err)
    res.sendStatus(500).json(err);
  }
});

module.exports = router;

