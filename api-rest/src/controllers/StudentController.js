const Student = require('../models/Student.js')
const Image = require('../models/Image.js')

class StudentController {
  async store (req, res) {
    const { name, surname, email, age, weight, height } = req.body

    try {
      await Student.create({
        name,
        surname,
        email,
        age,
        weight,
        height
      })

      return res.status(201).json()
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map(error => error.message)
      })
    }
  }

  async index (req, res) {
    try {
      const students = await Student.findAll({
        attributes: ['id', 'name', 'surname', 'email', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [Image, 'id', 'DESC']],
        include: {
          model: Image,
          attributes: ['file_name', 'url']
        }
      })

      return res.json(students)
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map(error => error.message)
      })
    }
  }

  async show (req, res) {
    const { id } = req.params

    try {
      const student = await Student.findByPk(id, {
        attributes: ['id', 'name', 'surname', 'email', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [Image, 'id', 'DESC']],
        include: {
          model: Image,
          attributes: ['file_name', 'url']
        }
      })

      if (!student) {
        return res.status(404).json({
          errors: ['student not found']
        })
      }

      return res.json(student)
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map(error => error.message)
      })
    }
  }

  async delete (req, res) {
    const { id } = req.params

    try {
      const student = await Student.findByPk(id)

      if (!student) {
        return res.status(404).json({
          errors: ['student not found']
        })
      }

      await student.destroy()

      return res.json()
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map(error => error.message)
      })
    }
  }

  async update (req, res) {
    const { id } = req.params
    const { name, surname, email, age, weight, height } = req.body

    if (!id) {
      return res.status(404).json({
        errors: ['id is missing']
      })
    }

    try {
      const student = await Student.findByPk(id)

      if (!student) {
        return res.status(404).json({
          errors: ['student not found']
        })
      }

      await student.update({
        name,
        surname,
        email,
        age,
        weight,
        height
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

module.exports = StudentController
