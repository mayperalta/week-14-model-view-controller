// Import modules
const router = require('express').Router();
const { Blog, User} = require('../../models');

// add 
router.post('/', async (req, res) => {
  try {
    req.body.user_id = req.session.user_id
    const newPost = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      created: req.body.created,
      user_id: req.session.user_id || req.body.user_id
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update
router.put (':id', async (req, res) => {
  try {
    const blogData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    }); 
    if (!blogData[0]) {
      res.sendStatus(404).json({ message: 'No Workout data found with that id!' });
      return;
    }
    res.sendStatus(200);
  }
    catch (err) {
    res.sendStatus(500).json(err);
    }
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


// router.post('/', async (req, res) => {
//   try {
//     console.log("triggered")
//     req.body.user_id = req.session.user_id
//     const blogData = await Blog.create(req.body);
//     console.log(blogData)
//     res.status(200).json(blogData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// module.exports = router;