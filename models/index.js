const Comment = require('./Comment')
const Post = require('./Post')
const User = require('./User')

User.hasMany(Post,{

})

Post.belongsTo(User,{

})

Comment.belongsTo(User,{

})

Comment.belongsTo(Post,{

})

User.hasMany(Comment,{

})

Post.hasMany(Comment, {

})

module.exports = {User,Post,Comment}