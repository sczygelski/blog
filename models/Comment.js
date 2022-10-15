const {Model,DataTypes} = require('sequelize')
const sequelize = reuire('../config/connection')

class Comment extends Model {}

CustomElementRegistry.init(
    {
        id:{
            type: DataTypes.Integer,
            primaryKey: true,
            autoIncrement: true
        },
        body:{
            type:DataTypes.STRING,
            allowNull:false,
            validate: {
                len:[5]
            }
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references: {
                model:'user',
                key: 'id'
            }
        },
        post_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Post',
                key:'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored:true,
        modelName: 'Comment'
    }
)

module.exports = Comment