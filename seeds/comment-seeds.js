const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Happy to see a new face!',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Welcome to our little home away from home!',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Great to have you here!',
    user_id: 2,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
