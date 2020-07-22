'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'users'
  });
  User.associate = function(models) {
    const { Favorite } = models;
    User.hasMany(Favorite, {foreignKey: 'user_id'});
  };
  return User;
};
