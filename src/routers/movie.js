const { response } = require('express');
var db = require('../index');
require('../models/movie')
const Movie = db.movie;

const { Sequelize, Op } = require('sequelize');

const multer = require('multer')

//add movie
var addMovie = async (req, res) => {

    try {
        const movie = Movie.create(req.body);
        res.status(201).send(movie);
    } catch (e) {
        res.status(400).send(e);
    }

}


//get all movies for the home page
var allMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll({});
        res.send(movies);
    }
    catch (e) {
        res.send(e);
    }
}


// get the movie by unique id
var findMovie = async (req, res) => {

    const _id = req.params.id;

    try {
        const movie = await Movie.findAll(
            {
                where:
                {
                    id: _id
                }
            })
        if (!movie) {
            return res.status(404).send();
        }
        res.send(movie)

    } catch (e) {
        res.status(500).send(e);
    }

}

//update movie details
var updateMovie = async (req, res) => {

    var id = req.params.id;

    try {
        let data = await Movie.update(
            { name: req.body.name },
            { releasedate: req.body.releasedate },
            { description: req.body.description },
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

//delete movie 
var deleteMovie = async (req, res) => {
    var id = req.params.id
    console.log(id)
    try {
        const movie = await Movie.destroy({
            where: {
                id: id
            }
        })

        if (!movie) {
            res.status(404).send();
        }

        res.send(movie);

    } catch (e) {
        res.status(500).send(e);
    }
}


//adding poster to movie
var addMoviePoster = async (req, res) => {

    var _id = req.params.id
    console.log(_id)
    try {
        const movie = await Movie.findOne({
            where: {
                id: _id
            }
        })

        movie.avatar = req.file.buffer

        // Movie.update({
        //     where: {
        //         id: _id
        //     }
        // })      
    } catch (e) {
        res.status(404).send()
    }
}

//display the poster of movie
var displayMoviePoster = async (req, res) => {
    var _id = req.params.id
    console.log(_id)
    try {
        const movie = await Movie.findOne({
            where: {
                id: _id
            }
        })

        res.set('Content-Type', 'image/jpg')
        res.send(movie.avatar)
    } catch (e) {
        res.status(404).send()
    }
}

//deleting the poster from perticular movie
var deleteMoviePoster = async (req, res) => {

    var _id = req.params.id
    console.log(_id)
    try {
        const movie = await Movie.findOne({
            where: {
                id: _id
            }
        })
        movie.avatar = undefined
        res.status(200).send()

    }
    catch (e) {
        res.status(404).send()
    }
}

module.exports = {
    addMovie,
    allMovies,
    findMovie,
    updateMovie,
    deleteMovie,
    addMoviePoster,
    displayMoviePoster,
    deleteMoviePoster
}