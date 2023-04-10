const User = require('../models/User')
const jwt = require('jsonwebtoken')

class AutenticateUserController {
  async handle (req, res) {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        errors: ['email or password are missing']
      })
    }

    try {
      const user = await User.findOne({
        where: {
          email
        }
      })

      if (!user) {
        return res.status(400).json({
          errors: ['user not found']
        })
      }

      const passwordIsValid = await user.passwordIsValid(password)

      if (!passwordIsValid) {
        return res.status(400).json({
          errors: ['invalid password']
        })
      }

      const token = jwt.sign(
        {
          user: {
            id: user.id,
            email: user.email
          }
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRATION
        }
      )

      return res.json({ token })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = AutenticateUserController
