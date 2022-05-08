// basic config
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 8000);
const cors = require('cors');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// redirect
app.get('/', (req, res) => {
	res.redirect('/blog');
});
// start controllers
// const blogpostcontrollers = require('./controllers/blogpostControllers');
// app.use('/blog', blogpostcontrollers);

// err handling
app.use((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
  });

// start server
app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});