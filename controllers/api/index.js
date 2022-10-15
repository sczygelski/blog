const router = require('express').Router()

const postRoutes = require('./post_routes')
const commentRoutes = require('./comment_routes')
const userRoutes = require('./user_routes')

router.use('/posts',postRoutes)
router.use('/comment',commentRoutes)
router.use('/user', userRoutes)

module.export = router