const User = require('../models/User.js')

class UserController {
  async store (req, res) {
    const { name, email, password } = req.body

    try {
      await User.create({
        name,
        email,
        password_decrypted: password
      })

      return res.status(201).json()
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
      const users = await User.findAll()

      return res.json(users)
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map(error => error.message)
      })
    }
  }

  async show (req, res) {
    const { id } = req.user

    try {
      const user = await User.findByPk(id)

      if (!user) {
        return res.status(404).json({
          errors: ['user not found']
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
          errors: ['user not found']
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
    const { id } = req.user
    const { name, email, password } = req.body

    try {
      const user = await User.findByPk(id)

      if (!user) {
        return res.status(404).json({
          errors: ['user not found']
        })
      }

      await user.update({
        name,
        email,
        password_decrypted: password
      })

      return res.json()
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map(error => error.message)
      })
    }
  }
}

module.exports = UserController
