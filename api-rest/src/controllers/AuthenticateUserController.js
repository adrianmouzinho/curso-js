const { z } = require('zod')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const User = require('../models/User')

class AutenticateUserController {
  async handle (req, res) {
    try {
      const bodySchema = z.object({
        email: z.string().email('E-mail inválido!'),
        password: z.string().min(6, 'A senha precisa ter pelo menos 6 caracteres.')
      })

      const { email, password } = bodySchema.parse(req.body)

      const user = await User.findOne({
        where: {
          email
        }
      })

      if (!user) {
        return res.status(400).json({
          errors: ['E-mail ou senha inválidos.']
        })
      }

      const isValidPassword = await bcryptjs.compare(password, user.password)

      if (!isValidPassword) {
        return res.status(400).json({
          errors: ['E-mail ou senha inválidos.']
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
