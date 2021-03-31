const express = require('express')
const app = express();

require('./index')
var userCtrl = require('./routers/user');
var movieCtrl = require('./routers/movie');


const auth = require('./middleware/authentication')

app.use(express.json())

const port = 3020

app.get('/', (req, res) => {
    res.send('hello from new app')
})

//sequelize demo testing API's
app.get('/addDemo', userCtrl.addDemo)


//user API's

app.post('/users', userCtrl.addUser)

app.post('/users/login', userCtrl.loginUser)

app.get('/users/me', auth, userCtrl.userProfile)

 app.post('/users/logout', auth, userCtrl.logout)

 app.patch('/users/:id', auth, userCtrl.updateUser)

 app.delete('/users/:id', auth, userCtrl.deleteUser)


//movies API's

 app.post('/movies', auth, movieCtrl.addMovie)

 app.get("/movies/all",movieCtrl.allMovies)

 app.get("/movies/:id",auth,movieCtrl.findMovie)

 app.patch("/movies/:id", auth,movieCtrl.updateMovie)

 app.delete('/movies/:id', auth,movieCtrl.deleteMovie)

 app.post('/movies/:id',auth,movieCtrl.addMoviePoster)

 app.get('/movies/:id/avatar',auth,movieCtrl.displayMoviePoster)

 app.delete('/movies/:id/avatar', auth,movieCtrl.deleteMoviePoster)


app.listen(port, () => {
    console.log('app is running on port' + port)
})