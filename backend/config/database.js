const mongoose = require('mongoose') //o mongoose é responsavel por mapear o mongodb
module.exports = mongoose.connect('mongodb://localhost/db_finance') //conexao com banco
