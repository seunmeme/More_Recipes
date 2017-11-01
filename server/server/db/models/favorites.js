module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define('Favorites', {
    recipeid: {
      type: DataTypes.INTEGER,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
  });
  Favorites.associate = (models) => {
    Favorites.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'userf',
    });
    Favorites.belongsTo(models.Recipes, {
      foreignKey: 'userId',
      as: 'recipef',
    });
  };

  return Favorites;
};
