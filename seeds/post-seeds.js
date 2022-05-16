const { Post } = require('../models');

const postdata = [
  {
    title: "My first post",
    post_content: 'This is my first post ever! I am so proud!',
    user_id: 1
  },
  {
    title: "Hello Tech Blog!",
    post_content: 'I am so excited to be a part of this community! Posting is fun!',
    user_id: 2
  },
  {
    title: "Introduction",
    post_content: 'Hello everybody! Great to be here! Please let me know what I can do to contribute. ',
    user_id: 3
  } 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
