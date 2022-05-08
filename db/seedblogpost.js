const mongoose = require('./connection');

const Blog = require('../models/Blog');
const BlogpostSeed = require('./seed.json');

const blogData = BlogpostSeed.map(post => {
    return post;
})

Blog.deleteMany({})
    .then(() => {
        Blog.insertMany(blogData);
})
.catch(console.error)