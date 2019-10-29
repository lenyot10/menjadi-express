const Mongoose = require("mongoose");//memanggil libary moongose
Mongoose.connect('mongodb://localhost/belajarmongo');//mengkoneksikan ke db mongo
module.exports = Mongoose;//export module Mongoose
//config mongo dan koneksi ke db