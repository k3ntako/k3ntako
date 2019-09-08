import FetchHelper from './FetchHelper';

export default class Project{
  constructor(props){
    const { name = null, description = null, githubURL = null, demoURL = null, startDate = null, endDate = null, technologies = null } = req.body;

    this._name = name;
    this._description = description;
    this._githubURL = githubURL;
    this._demoURL = _demoURL;
    this._startDate = _startDate;
    this._endDate = _endDate;
    this._technologies = _technologies;
  }

  static all(){
    return FetchHelper.get('/api/projects');
  }

  create(){
    return FetchHelper.get('/api/projects').then(project => {
      return new Project(project)
    });
  }
}
