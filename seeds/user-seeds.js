const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'larry',
    password: 'Changeme2%'
  },
  {
    username: 'mo',
    password: 'Changeme2%'
  },
  {
    username: 'curly',
    password: 'Changeme2%'
  }
  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
