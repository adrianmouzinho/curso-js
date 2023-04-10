const { DataTypes, Model } = require('sequelize')

const { url } = require('../config/app.js')

class Image extends Model {
  static init (sequelize) {
    super.init({
      original_name: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'field cannot be empty'
          }
        }
      },
      file_name: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'field cannot be empty'
          }
        }
      },
      url: {
        type: DataTypes.VIRTUAL,
        get () {
          return `${url}/images/${this.getDataValue('file_name')}`
        }
      }
    }, { sequelize })
  }

  static associate (models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' })
  }
}

module.exports = Image
