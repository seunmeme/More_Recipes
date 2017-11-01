module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    recipeid: {
      type: DataTypes.INTEGER,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
  });
  Reviews.associate = (models) => {
    Reviews.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'recipus',
    });
  };

  return Reviews;
};
