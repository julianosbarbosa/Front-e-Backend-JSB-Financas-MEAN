const mongoose = require('mongoose') //o mongoose é responsavel por mapear o mongodb
module.exports = mongoose.connect('mongodb://localhost/db_finance') //conexao com banco

mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatorio"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado não pode ser menor que '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado não pode ser maior que '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido"