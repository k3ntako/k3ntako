const Project = require('../models').models.Project;

const ProjectController = {

  async all(req, res, next){
    try{
      const projects = await Project.findAll();
      res.json(projects);
      next();
    } catch(err) {
      next(err);
    }
  },

  async create(req, res, next){
    try{
      const { name = null, description = null, githubURL = null, demoURL = null, startDate = null, endDate = null, technologies = null } = req.body;
      const project = Project.create({ name, description, githubURL, demoURL, startDate, endDate, technologies });

      res.json(project);
      next();
    } catch(err) {
      next(err);
    }
  },

};



module.exports = ProjectController;
