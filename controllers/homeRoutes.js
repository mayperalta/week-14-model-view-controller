// Import modules
const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
res.render('homepage', {logged_in: req.session.logged_in});
  
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboardRoutes');
  } else {
    res.render('login');
  }
});

router.get('/community', async (req, res) => {
  try {

    // Get all communities 
    const communityData = await Community.findAll({

    });
    console.log(communityData)

    const communityMap = communityData.map((community) => community.get({ plain: true }));
    console.log(communityData)
    // Pass serialized data and session flag into template
    res.render('community', {
      communityMap
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);

  }
});

router.get('/userexercise', async (req, res) => {
  try {
    // Get all communities 
    const workoutData = await Workout.findAll({
      where: { user_id: req.session.user_id }

    });
    console.log(workoutData)

    const workoutMap = workoutData.map((workout) => workout.get({ plain: true }));
    const exerciseData = await Workout.findOne({
      where: { user_id: req.session.user_id },
      include: [
        {
          model: User,
          attributes: ['id'],
        },
      ],
    });

    if (!exerciseData) {
      res.render('exercise-user', {
        workoutMap,
        logged_in: req.session.logged_in
      });

    } else {

      const exerciseMap = exerciseData.get({ plain: true });

      res.render('exercise-user', {
        workoutMap, ...exerciseMap,
        logged_in: req.session.logged_in
      });
    }

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;