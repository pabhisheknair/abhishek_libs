const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ABHI:ABHI@ictakfsd.omadk.mongodb.net/db");
const Schema = mongoose.Schema;
var ReviewSchema = new Schema({
    proName: String,
    proAuth: String,
     proGenre: String,
     proDesc: String,
   
});
var Reviewdata = mongoose.model('review',ReviewSchema);
module.exports  = Reviewdata;