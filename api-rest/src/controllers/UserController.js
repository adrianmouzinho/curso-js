const { z } = require('zod')
const bcryptjs = require('bcryptjs')
const User = require('../models/User.js')

class UserController {
  async store (req, res) {
    try {
      const bodySchema = z.object({
        name: z.string().min(6, 'O nome precisa ter pelo menos 6 caracteres.'),
        email: z.string().email('E-mail inválido.'),
        password: z.string().min(6, 'A senha precisa ter pelo menos 6 caracteres.')
      })

      const { name, email, password } = bodySchema.parse(req.body)

      const passworHash = await bcryptjs.hash(password, 8)

      const user = await User.create({
        name,
        email,
        password: passworHash
      })

      return res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      })
    } catch (error) {
      if (error.errors) {
        return res.status(400).json({
          errors: error.errors.map(error => error.message)
        })
      }

      return res.status(400).json(error)
    }
  }

  async index (req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt']
      })

      return res.json(users)
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map(error => error.message)
      })
    }
  }

  async show (req, res) {
    try {
      const paramsSchema = z.object({
        id: z.string().uuid()
      })

      const { id } = paramsSchema.parse(req.params)

      const user = await User.findByPk(id, {
        attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt']
      })

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não encontrado!']
        })
      }

      return res.json(user)
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map(error => error.message)
      })
    }
  }

  async delete (req, res) {
    const { id } = req.user

    try {
      const user = await User.findByPk(id)

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não encontrado!']
        })
      }

      await user.destroy()

      return res.json()
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map(error => error.message)
      })
    }
  }

  async update (req, res) {
    try {
      const { id } = req.user

      const bodySchema = z.object({
        name: z.string().min(6, 'O nome precisa ter pelo menos 6 caracteres.'),
        email: z.string().email('E-mail inválido.'),
        password: z.string().min(6, 'A senha precisa ter pelo menos 6 caracteres.')
      })

      const { name, email, password } = bodySchema.parse(req.body)

      const userAlreadyExists = await User.findByPk(id)

      if (!userAlreadyExists) {
        return res.status(404).json({
          errors: ['Usuário não encontrado.']
        })
      }

      const passworHash = await bcryptjs.hash(password, 8)

      const user = await userAlreadyExists.update({
        name,
        email,
        password: passworHash,
        updatedAt: new Date()
      })

      return res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      })
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map(error => error.message)
      })
    }
  }
}

module.exports = UserController
