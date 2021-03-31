const { response } = require('express');
var db = require('../index');
require('../models/user')
const User = db.user;

const { Sequelize, Op } = require('sequelize');

//demo data insertion
var addDemo = async (req, res) => {

    let data = await User.create({ name: 'ankush', email: 'ankush@gmail.com', age: '28' });

    let response = {
        data: 'ok'
    }
    res.status(200).json(response)
}

//add user to database
var addUser = async (req, res) => {

    try {
        const user = User.create(req.body);

        const token = await user.generateAuthenticationToken()
        user.token = token
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
    res.send(req.body)
    console.log(req.body)

}

// //user Login
var loginUser = async (req, res) => {

    try {
        console.log(req.body.email, req.body.password)
        const user = await User.findByIdPassword(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        console.log(user)
        res.status(200).json({ "token": user.token })

    } catch (e) {
        res.status(400).send(e)
    }
}

// //display user profile
var userProfile = async (req, res) => {

    res.send(req.user)

}

// //user logout
var logout = async (req, res) => {

    try {
        res.status(200).json({ "success": "logout successfully" })
    }
    catch (e) {
        res.status(400).send(e)
    }
}

//update user information
var updateUser = async (req, res) => {

    var id = req.params.id;

    try {
        let data = await User.update(
            { userType: req.body.name },
            { name: req.body.name },
            { email: req.body.email },
            { password: req.body.passowrd },
            { age: req.body.age },
            {
                where: {
                    id: id
                }
            })
        res.status(200).json(user)
    } catch (e) {
        res.status(400).send(e)
    }
}
//delete user
var deleteUser = async (req, res) => {

    var id = req.params.id
    console.log(id)
    try {
        const user = await User.destroy({
            where: {
                id: id
            }
        })

        if (!user) {
            res.status(404).send();
        }

        res.send(user);

    } catch (e) {
        res.status(500).send(e);
    }


}

module.exports = {

    addDemo,
    addUser,
    loginUser,
    userProfile,
    logout,
    updateUser,
    deleteUser
}





