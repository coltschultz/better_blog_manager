const { Post } = require('../models');

const postdata = [
  {
    title: "Larry's first post",
    post_content: 'This is my first post ever! I am so proud!',
    user_id: 1
  },
  {
    title: "Mo's first post",
    post_content: 'I am so excited to be a part of this community! Posting is fun!',
    user_id: 2
  },
  {
    title: "Curly's first post",
    post_content: 'Hello everybody! My name is curly! Great to be here!',
    user_id: 3
  } 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
