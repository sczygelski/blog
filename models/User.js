const { Model, DataTypes} = require('sequelize')
const bcrypt = require('bycrypt')
const sequelize = require('../config/connection')

class User extends Model{}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type:DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            uniqure:true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[5]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newUser) {
                newUser.password = await bcrypt.has(newUser.password,10)
                return newUser
            },
            async beforeUpdate(updateUser) {
                updateUser.password = await bcrypt.hash(
                    updateUser.password, 10
                )
                return updateUser
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName:true,
        underscored: true,
        modelName: 'User'
    }
)

model.exports = User