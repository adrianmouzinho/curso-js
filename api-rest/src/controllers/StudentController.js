const { z } = require('zod')
const Student = require('../models/Student.js')

class StudentController {
  async store (req, res) {
    try {
      const bodySchema = z.object({
        name: z.string().min(4, 'O nome precisa ter pelo menos 4 caracteres.'),
        surname: z.string().min(4, 'O sobrenome precisa ter pelo menos 4 caracteres.'),
        email: z.string().email('E-mail inválido.'),
        avatarUrl: z.string().url('URL inválida.'),
        age: z.string().datetime('Formato de data inválido.'),
        weight: z.number().min(30, 'O peso mínimo é de 30g.'),
        height: z.number().min(80, 'A altura mínima é de 80cm.')
      })

      const { name, surname, email, avatarUrl, age, weight, height } = bodySchema.parse(req.body)

      const student = await Student.create({
        name,
        surname,
        email,
        avatarUrl,
        age,
        weight,
        height
      })

      return res.status(201).json(student)
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map(error => error.message)
      })
    }
  }

  async index (req, res) {
    try {
      const students = await Student.findAll()

      return res.json(students)
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

      const student = await Student.findByPk(id)

      if (!student) {
        return res.status(404).json({
          errors: ['Estudante não encontrado.']
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
          errors: ['Estudante não encontrado!']
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
    try {
      const paramsSchema = z.object({
        id: z.string().uuid()
      })

      const { id } = paramsSchema.parse(req.params)

      const bodySchema = z.object({
        name: z.string().min(4, 'O nome precisa ter pelo menos 4 caracteres.'),
        surname: z.string().min(4, 'O sobrenome precisa ter pelo menos 4 caracteres.'),
        email: z.string().email('E-mail inválido.'),
        avatarUrl: z.string().url('URL inválida.'),
        age: z.string().datetime('Formato de data inválido.'),
        weight: z.number().min(30, 'O peso mínimo é de 30g.'),
        height: z.number().min(80, 'A altura mínima é de 80cm.')
      })

      const { name, surname, email, avatarUrl, age, weight, height } = bodySchema.parse(req.body)

      const studentAlreadyExists = await Student.findByPk(id)

      if (!studentAlreadyExists) {
        return res.status(404).json({
          errors: ['Estudante não encontrado!']
        })
      }

      const student = await studentAlreadyExists.update({
        name,
        surname,
        email,
        avatarUrl,
        age,
        weight,
        height,
        updatedAt: new Date()
      })

      return res.json(student)
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map(error => error.message)
      })
    }
  }
}

module.exports = StudentController
