const router = require('express').Router();

const userRoutes = require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes');
const communityRoutes = require('./communityRoutes');

// localhost:3001/api/user
router.use('/user', userRoutes);
router.use('/exercise', exerciseRoutes)
router.use('/community', communityRoutes)

module.exports = router;