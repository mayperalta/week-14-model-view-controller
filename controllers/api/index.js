const router = require('express').Router();

// const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./postRoutes');
const userRoutes = require ('./userRoutes');

// localhost:3001/api/user
router.use('/user', userRoutes);
router.use('/post', dashboardRoutes)
router.use('/manage', dashboardRoutes)

module.exports = router;