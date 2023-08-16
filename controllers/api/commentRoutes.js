const router = require('express').Router();
const {Comment} = require('../../models');
const withAuth = require('../../utils/auth');

// create new comment
router.post('/', withAuth, async (req, res) => {
  try {
    // req.body.user_id = req.session.user_id
    const commentData = await Comment.create({
      comment_entry: req.body.comment_entry,
      post_id: req.body.post_id,
      user_id: req.session.user_id
      });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update current post
router.put ('/:id', withAuth,async (req, res) => {
  try {
    const commentData = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    }); 
    if (!commentData[0]) {
      res.sendStatus(404).json({ message: 'No comment found with that id!' });
      return;
    }
    res.sendStatus(200).json(commentData);
  }
    catch (err) {
    res.sendStatus(500).json(err);
    }
}); 


// delete an existing post
router.delete('/:id', withAuth, async (req, res) => {

  try {
    const commentData = await Workout.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log(commentData)

    if (!commentData) {
      res.sendStatus(404).json({ message: 'No comment found with this user!' });
      return;
    }

    res.sendStatus(200).json(commentData);
  } catch (err) {
    res.sendStatus(500).json(err);
  }
});

module.exports = router;

