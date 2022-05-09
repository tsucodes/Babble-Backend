const mongoose = require('../db/connection');

const BlogpostSchema = new mongoose.Schema({
    title: String,
    image: String,
    text: String,
})
const Blogpost = mongoose.model('Blog', BlogpostSchema);
module.exports = Blogpost