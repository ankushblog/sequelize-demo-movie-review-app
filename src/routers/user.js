const { response } = require('express');
var db = require('../index');
require('../models/user')
const User = db.user;

const { Sequelize, Op } = require('sequelize');


var addUser1 = async (req, res) => {

    let data = await User.create({ name: 'ankush', email: 'ankush@gmail.com', age: '28' });

    let response = {
        data: 'ok'
    }
    res.status(200).json(response)
}

//all CRUD operations
var crudOperation = async (req, res) => {

    // insert
    // let data = await Users.create({ name: 'demo', email: 'demo@gmal.com', gender: 'M' });
    // console.log(data.id)

    //update
    // let data= await Users.update({name:'ankush'},{
    //     where:{
    //         id:2
    //     }
    // })

    //delete
    // let data = await Users.destroy( {
    //     where: {
    //         id: 2
    //     }
    // })

    //truncate
    // let data = await Users.destroy({
    //     truncate: true
    // })

    //bulk insertion 

    // let data = await Users.bulkCreate([
    //     { name: 'demo1', email: 'demo1@gmal.com', gender:'F' },
    //     { name: 'demo2', email: 'demo2@gmal.com', gender:'M' },
    //     { name: 'demo3', email: 'demo3@gmal.com', gender:'F' },
    //     { name: 'demo4', email: 'demo4@gmal.com', gender:'M' }
    // ])

    // let data = await Users.findAll({});


    // let response = {
    //     data: data
    // }
    // res.status(200).json(response)
}


//select include exclude condition
var queryData = async (req, res) => {

    //select
    // let data = await Users.findAll({
    //     attributes: [
    //         'name',
    //         'gender',
    //         [Sequelize.fn('count', Sequelize.col('email')), 'emailcount']
    //     ]
    // })

    //include exclude
    // let data = await Users.findAll({
    //     attributes: {
    //         exclude: 'gender',
    //         include:[ [Sequelize.fn('CONCAT', Sequelize.col('name'), ' patil'), 'fullname']]
    //     }
    // })

    //condition

    // let data = await Users.findAll({
    //     where: {
    //         //id: 2 

    //         // id: {
    //         //     [Op.eq]: 2
    //         // },
    //         email: {
    //             [Op.like]: '%.com%'
    //         }
    //     },
    //     order: [
    //         ['name', 'DESC']
    //     ],
    //     group:['name'],
    //     limit: 2,
    //     offset: 1   //skip the no. of records
    // })


    //     // to count the number of records
    //     let data = await Users.count({})

    //     let response = {
    //         data: data
    //     }
    //     res.status(200).json(response);
}

//all find quries
var finderData = async (req, res) => {

    //let data = await Users.findAll({})
    //let data = await Users.findOne({})
    //let data = await Users.findbyPk(3)
    // let data = await Users.findAndCountAll({
    //     where: {
    //         name: 'demo1'
    //     }
    // })

    // let [data, created] = await Users.findOrCreate({
    //     where: { name: 'rahul' },
    //     defaults: {
    //         email: 'rahul@gamil.com',
    //         gender: 'M'
    //     }
    // })
    // let response = {
    //     data: data,
    //     add: created
    // }
    res.status(200).json(response);
}

//add user to database
var addUser = async (req, res) => {

    const user = User.create(req.body);

     res.send(user)
    // console.log(req.body)

    // try {
    //   //  await user.save();

    //     const token = await user.generateAuthenticationToken()
    //     res.status(201).send({ user, token });
    // } catch (e) {
    //     res.status(400).send(e);
    // }
    // res.send(req.body)
    // console.log(req.body)

}


// //user Login
// var loginUser = async (req, res) => {
//     try {
//         const user = await User.findByIdPassword(req.body.email, req.body.password)
//         const token = await user.generateAuthenticationToken()

//         //res.send(user)
//         // const pass = req.body.password;
//         // const emailid = req.body.email;

//         // res.send({ pass, emailid })
//         res.send({ user, token })

//     } catch (e) {
//         res.send('user not found')
//     }
// }

// //display user profile
// var userProfile = async (req, res) => {

// }

// //user logout
// var logout = async (req, res) => {

// }

// //logout from all sessions
// var logoutAll = async (req, res) => {

// }

// //update user information
// var updateUser = async (req, res) => {

// }

// //delete user
// var deleteUser = async (req, res) => {

// }

module.exports = {

    addUser1,
    crudOperation,
    queryData,
    finderData,
    addUser
    // loginUser,
    // userProfile,
    // logout,
    //logoutAll,
    // updateUser,
    // deleteUser
}





