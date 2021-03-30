const mongoose = require('mongoose');
var validator = require('validator');


//fields of movie model


module.exports = (sequelize, Datatypes) => {

    const Movie = sequelize.define('Movie', {
        name:
        {
            type: Datatypes.STRING,
            allowNull: false
        },
        releasedate:
        {
            type: Datatypes.STRING,
            allowNull: false,
        }
        ,
        image:
        {
            type: Datatypes.STRING
        },
        description:
        {
            type: Datatypes.STRING
        },
        avatar:
        {
            type: Datatypes.STRING
        }

    })
    return Movie
}