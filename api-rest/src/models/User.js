const { DataTypes, Model } = require('sequelize')
const bcryptjs = require('bcryptjs')

class User extends Model {
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
      email: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'invalid e-mail'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      password_decrypted: {
        type: DataTypes.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 10],
            msg: 'password must contain between 6 and 10 characters'
          }
        }
      }
    }, { sequelize })

    this.addHook('beforeSave', async user => {
      if (user.password_decrypted) {
        user.password = await bcryptjs.hash(user.password_decrypted, 8)
      }
    })
  }

  passwordIsValid (passwordDecrypted) {
    return bcryptjs.compare(passwordDecrypted, this.password)
  }
}

module.exports = User
