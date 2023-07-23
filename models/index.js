const User = require('./User.js');
const Blog = require('./Blog.js');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Workout.belongsTo(User, {
    foreignKey: 'user_id'
  });


module.exports = { User, Blog};


