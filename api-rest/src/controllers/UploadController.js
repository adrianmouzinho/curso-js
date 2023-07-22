const multer = require('multer')

const multerConfig = require('../config/multer.js')

const upload = multer(multerConfig).single('image')

class UploadController {
  store (req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        console.log({ error })
        return res.status(400).json({
          errors: [error.code]
        })
      }

      try {
        const { filename } = req.file

        const fullUrl = req.protocol.concat('://').concat(req.header('host'))
        const fileUrl = new URL(`/uploads/${filename}`, fullUrl)

        return res.status(201).json({ fileUrl })
      } catch (error) {
        if (error instanceof multer.MulterError) {
          return console.log({ error })
        }

        return res.status(400).json({
          errors: error.errors.map(error => error.message)
        })
      }
    })
  }
}

module.exports = UploadController
