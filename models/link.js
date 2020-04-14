const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const linkSchema = new Schema({
    name: { type: String, required:true },
    category: {type:String, required:true},
    url:{ type:String },
    img:{ type:String },
    description:{ type:String }
},{
    timestamps:true,
})

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;