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
      const { name, description = null, githubURL = null, demoURL = null, videoURL = null, startDate = null, endDate = null, technologies = null } = req.body;

      await Project.create({
        name, description, githubURL, demoURL, videoURL, startDate, endDate, technologies
      })

      res.json({ okay: true });
      next();
    } catch(err) {
      next(err);
    }
  },

};



module.exports = ProjectController;
