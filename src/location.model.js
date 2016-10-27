Sequelize.define('location', {
  latitude: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  longitude: {
    type: Sequelize.Double,
    allowNull: false,
  },
})
