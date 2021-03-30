const express = require('express')
const app = express();

require('./index')
var userCtrl = require('./routers/user');

const auth = require('./middleware/authentication')


const port = 3020

app.get('/', (req, res) => {
    res.send('hello from new app')
})


app.get('/add', userCtrl.addUser1)

app.get('/crud', userCtrl.crudOperation)

app.get('/queryData', userCtrl.queryData)

app.get('/finder', userCtrl.finderData)


app.post('/users', userCtrl.addUser)

app.post('/users/login', userCtrl.loginUser)

app.get('/users/me', auth, userCtrl.userProfile)

app.post('/users/logout', auth, userCtrl.logout)

app.post('/users/logoutall', auth, userCtrl.logoutAll)

app.patch('/users/:id', auth, userCtrl.updateUser)

app.delete('/users/:id', auth, userCtrl.deleteUser)


app.listen(port, () => {
    console.log('app is running on port' + port)
})