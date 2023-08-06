// Import modules
const router = require('express').Router();
const { Blog, User } = require('../../models');

// add 
router.post('/', async (req, res) => {
  try {
    req.body.user_id = req.session.user_id
    const blogData = await Blog.create(req.body);
    console.log(blogData)
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update
router.put('/:id', (req, res) => {
  Blog.update(
    {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      data_created: req.body.date_created,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedBlog) => {
      res.json(updatedBlog);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});


// delete
router.delete('/:id', async (req, res) => {

  try {
    const blogData = await Workout.destroy({
      where: {
        id: req.params.id
      },
    });
    console.log(blogData)

    if (!blogData) {
      res.sendStatus(404).json({ message: 'No Workout data found with this user!' });
      return;
    }

    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500).json(err);
  }
});

module.exports = router;