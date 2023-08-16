const router = require('express').Router();

// const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./postRoutes');
const userRoutes = require ('./userRoutes');
const commentRoutes = require ('./commentRoutes');

// localhost:3001/api/user
router.use('/user', userRoutes);
router.use('/post', dashboardRoutes)
router.use('/comment', commentRoutes)

module.exports = router;