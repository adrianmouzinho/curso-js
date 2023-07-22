const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DATABASE_URL,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true
  }
})

module.exports = sequelize
