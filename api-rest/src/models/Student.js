const { DataTypes, Model } = require('sequelize')

class Student extends Model {
  static init (sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'name must contain between 2 and 255 characters'
          }
        }
      },
      surname: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'surname must contain between 2 and 255 characters'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'invalid e-mail'
          }
        }
      },
      age: {
        type: DataTypes.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'type age must be integer'
          }
        }
      },
      weight: {
        type: DataTypes.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'type weight must be integer'
          }
        }
      },
      height: {
        type: DataTypes.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'type height must be integer'
          }
        }
      }
    }, { sequelize })
  }

  static associate (models) {
    this.hasMany(models.Image, { foreignKey: 'student_id' })
  }
}

module.exports = Student
