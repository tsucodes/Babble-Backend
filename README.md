# Babble-Backend

This is an API intended to gather blogposts from anonymous users on the web (deployed here: https://babble-ijc-tr.netlify.app/) in order to allow them to share their stories, whatever they may be. Specifically with regards to this backend functionality, users have full CRUD access in order to contribute communally to this project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
## Built With
* [Node.js](https://nodejs.org/en/) - JavaScript runtime on Chrome's V8 JavaScript engine.
* [Express.js](https://expressjs.com/) - Back-End web application framework for Node.js
* [MongoDB](https://www.mongodb.com/) - NoSQL database system which stores data in the form of BSON documents.
* [Mongoose](https://mongoosejs.com/) - Object Data Modeling (ODM) library for MongoDB.

### Prerequisites

You need NPM installed on your machine in order to make a local environment for this API. 

For using the API in a live environment, simply make calls to this URL
```
https://babble-tr-ijc.herokuapp.com/blog
```

if you need to change 1 post, do so by id like so:

```https://babble-tr-ijc.herokuapp.com/blog/<id>
```

### Installing

In the command line:

```
$ npm install express mongoose dotenv cors
```

We recommend using POSTman in order to test without using fetch/axios calls on the front-end. 

Postman: https://www.postman.com/

Simply read the documentation from their site to get started.

## Deployment

This API is currently deployed on heroku (https://babble-tr-ijc.herokuapp.com/blog).

We used the Heroku CLI in order to deploy easily.

Instructions here: https://devcenter.heroku.com/articles/git


## Contributors

* **Tsani Rhodes** - *Scrum Manager* - [Github](https://github.com/tsucodes)
* **Jessie Collado** - *Junior Developer* - [Github](https://github.com/I-J-C)

## Resources

* Hat tip to anyone whose code was used
* Inspiration
* etc
