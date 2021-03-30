const jwt = require('jsonwebtoken')
const User = require('../models/user')

const db = require('../models')
const User = db.user
//this function will authenticate user based on tokens 
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ where: { id: decoded.id, token: token } })
        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'please authenticate' })
    }
}

module.exports = auth

