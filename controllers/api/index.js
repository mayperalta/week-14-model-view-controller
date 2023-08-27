const router = require('express').Router();

// const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require ('./userRoutes');
const commentRoutes = require ('./commentRoutes');

// localhost:3001/api/user
router.use('/user', userRoutes);
router.use('/post', postRoutes)
router.use('/update', postRoutes)
router.use('/comment', commentRoutes)

module.exports = router;