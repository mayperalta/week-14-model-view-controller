// Import modules
const router = require('express').Router();
const { Workout } = require('../../models');

router.post('/', async (req, res) => {
  try {
    req.body.user_id = req.session.user_id
    const workoutData = await Workout.create(req.body);
    console.log(workoutData)
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/', async (req, res) => {
//     const count = await Workout.destroy({ where: { id: req.body.exercise_id } });
//     console.log(`deleted row(s): ${count}`);
// })

router.delete('/:id', async (req, res) => {

  try {
    const workoutData = await Workout.destroy({
      where: {
        id: req.params.id
      },
    });
    console.log(workoutData)

    if (!workoutData) {
      res.sendStatus(404).json({ message: 'No Workout data found with this user!' });
      return;
    }

    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500).json(err);
  }
});

module.exports = router;