'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'products'
  });
  Product.associate = function(models) {
    const { Favorite } = models;
    Product.hasMany(Favorite, {foreignKey: 'product_id'});
  };
  return Product;
};
