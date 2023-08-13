const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const manageRoutes = require('./manageRoutes');

// localhost:3001/api/user
router.use('/user', userRoutes);
router.use('/post', postRoutes)
router.use('/manage', manageRoutes)

module.exports = router;