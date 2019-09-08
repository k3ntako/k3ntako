const express = require('express');

const ProjectController = require('./controllers/ProjectController');

let router = express.Router();


router.route( '/projects' ).
  get( ProjectController.all ).
  post( ProjectController.create );

module.exports = router;
