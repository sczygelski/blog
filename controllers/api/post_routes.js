const router = require('express').Router()
const sequelize = require('../../config/connection')
const {Post,Comment,User} = require('../../models')
//need to make still
const withAuth = require('../../utils/auth')

router.get('/', withAuth, (req,res) => {
    Post.findAll({
        attributes: ['id','title','body', 'user_id'],
        order: 
    })
})