const express = require('express');

const ProjectController = require('./controllers/ProjectController');
const EmailController = require('./controllers/EmailController');

let router = express.Router();


router.route( '/projects' ).
  get( ProjectController.all ).
  post( ProjectController.create );

router.route( '/emails' ).
  post( EmailController.send );

module.exports = router;
