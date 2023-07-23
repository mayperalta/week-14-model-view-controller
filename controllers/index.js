const router = require('express').Router();
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api')

// localhost:3001/
router.use('/', homeRoutes )

// localhost:3001/community
router.use('/community', homeRoutes)

// localhost:3001/api
router.use('/api', apiRoutes)

// localhost:3001/exercise
router.use('/userexercise', homeRoutes)


module.exports = router;