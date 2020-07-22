'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'favorites'
  });
  Favorite.associate = function(models) {
    const { User, Product } = models;
    Favorite.belongsTo(User, {foreignKey: 'user_id'});
    Favorite.belongsTo(Product, {foreignKey: 'product_id'});
  };
  return Favorite;
};
