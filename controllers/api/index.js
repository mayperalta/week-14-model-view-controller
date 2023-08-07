const router = require('express').Router();

const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');

// localhost:3001/api/user
router.use('/user', userRoutes);
router.use('/post', dashboardRoutes)

module.exports = router;