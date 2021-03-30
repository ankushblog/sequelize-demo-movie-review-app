
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sequelize-demo-movie-review-app', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});

try {
    sequelize.authenticate();
    console.log('Connection successful');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync')
    })

db.user = require('./models/user')(sequelize, DataTypes);
db.movie = require('./models/movie')(sequelize, DataTypes);
module.exports = db;