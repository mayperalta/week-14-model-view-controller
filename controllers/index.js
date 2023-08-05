const router = require('express').Router();
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api')
const dashboardRoutes = require('./api/dashboardRoutes')

// localhost:3001/
router.use('/', homeRoutes)

// localhost:3001/dashboard
router.use('/dashboard', dashboardRoutes)

// localhost:3001/api
router.use('/api', apiRoutes)

// localhost:3001/api
router.use('/signup', homeRoutes)


module.exports = router;