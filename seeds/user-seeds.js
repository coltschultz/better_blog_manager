const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'larry',
    email: 'larry@gmail.com',
    password: 'Changeme2%'
  },
  {
    username: 'mo',
    email: 'mo@gmail.com',
    password: 'Changeme2%'
  },
  {
    username: 'curly',
    email: 'curly@gmail.com',
    password: 'Changeme2%'
  }
  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
