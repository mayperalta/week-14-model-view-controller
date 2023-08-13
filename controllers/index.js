const router = require('express').Router();
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api')

// localhost:3001/
router.use('/', homeRoutes)

// localhost:3001/api
router.use('/api', apiRoutes)


module.exports = router;