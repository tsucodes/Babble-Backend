const express = require('express');
const router = express.Router();
//check to make sure this matches the actual models file
const Blogpost = require('../models/Blogpost');

//READ: get all Blogposts
router.get('/', (req, res, next) => {
	Blogpost.find({})
		.then((blogposts) => res.json(blogposts))
		.catch(next);
});

//READ: get Blogpost by ID
router.get('/:id', async (req, res, next) => {
	try {
		const blogpostID = await Blogpost.findById(req.params.id);
		res.json(blogpostID);
	} catch (err) {
		next(err);
	}
});

//CREATE: post Blogpost
router.post('/', async (req, res, next) => {
	try {
		const newBlogpost = await Blogpost.create(req.body);
        //Use this line if we don't want to redirect
		// res.status(201).json(newBlogpost);
		res.redirect(303, '/');
	} catch (err) {
		next(err);
	}
});

//UPDATE: update Blogpost by id
router.put('/:id', async (req, res, next) => {
	try {
		const BlogpostToUpdate = await Blogpost.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);
		if (BlogpostToUpdate) {
			res.redirect(303, '/');
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

//DELETE Blogpost
router.delete('/:id', async (request, response, next) => {
	try {
	const BlogpostToDelete = await Blogpost.findByIdAndDelete(request.params.id)
	// console.log(BlogpostToDelete);
	if (BlogpostToDelete) {
		response.redirect(303, '/');
	}else{
		response.sendStatus(404);
	}
}catch(error) {
	next(error);
}
})