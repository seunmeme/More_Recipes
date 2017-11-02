module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    directions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Recipes.associate = (models) => {
    Recipes.hasMany(models.Downvotes, {
      foreignKey: 'userId',
      as: 'recipesd',
    });
    Recipes.hasMany(models.Upvotes, {
      foreignKey: 'userId',
      as: 'recipesup',
    });
    Recipes.hasMany(models.Reviews, {
      foreignKey: 'userId',
      as: 'reciper',
    });
    Recipes.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'recipeu',
    });
  };

  return Recipes;
};
