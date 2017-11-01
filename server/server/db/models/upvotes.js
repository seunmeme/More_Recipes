module.exports = (sequelize, DataTypes) => {
  const Upvotes = sequelize.define('Upvotes', {
    recipeid: {
      type: DataTypes.INTEGER,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
  });

  Upvotes.associate = (models) => {
    Upvotes.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return Upvotes;
};
