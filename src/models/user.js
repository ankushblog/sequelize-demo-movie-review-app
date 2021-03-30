
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userType: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        token:
        {
            type: DataTypes.STRING
        }

    })

    User.prototype.generateAuthToken = async function () {
        const user = this

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
        //user.tokens=user.tokens.concat({token})

        await User.update({ token: token }, { where: { id: user.id } })
        //user.save()
        return token
    }

    User.findByCredentials = async (email, password) => {
        const user = await User.findOne({ where: { email: email } })
        if (!user) {
            throw new Error('Unable to Login')
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            throw new Error('Wrong Password')
        }

        return user
    }

    return User
}