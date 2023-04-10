const multer = require('multer')

const multerConfig = require('../config/multer.js')
const Student = require('../models/Student.js')
const Image = require('../models/Image.js')

const upload = multer(multerConfig).single('image')

class StudentImageController {
  store (req, res) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({
        errors: ['id required']
      })
    }

    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code]
        })
      }

      try {
        const student = await Student.findByPk(id)

        if (!student) {
          return res.status(400).json({
            errors: ['student not found']
          })
        }

        const { originalname, filename } = req.file

        await Image.create({
          student_id: id,
          original_name: originalname,
          file_name: filename
        })

        return res.status(201).json()
      } catch (error) {
        return res.status(400).json({
          errors: error.errors.map(error => error.message)
        })
      }
    })
  }
}

module.exports = StudentImageController
