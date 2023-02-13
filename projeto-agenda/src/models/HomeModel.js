const { default: mongoose } = require('mongoose')
const mosgoose = require('mongoose')

const HomeSchema = new mosgoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descricao: String
})

const HomeModel = mongoose.model('Home', HomeSchema)

class Home {

}

module.exports = Home