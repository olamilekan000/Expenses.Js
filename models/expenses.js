var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseSchema = new Schema({
	description: String,
	amount: Number,
  	month: String,
  	year: Number
});

var expenseModel = mongoose.model('Expenses', expenseSchema);

module.exports = expenseModel;