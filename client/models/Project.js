import FetchHelper from './FetchHelper';

export default class Project{
  constructor(props){
    const { name, description, githubURL, demoURL, videoURL, startDate, endDate, technologies } = props;

    this._name = name;
    this._description = description || null;
    this._githubURL = githubURL || null;
    this._demoURL = demoURL || null;
    this._videoURL = videoURL || null;
    this._startDate = startDate || null;
    this._endDate = endDate || null;
    this._technologies = technologies || null;
  }

  static all(){
    return FetchHelper.get('/api/projects');
  }

  static create( params ){
    return FetchHelper.post('/api/projects', params);
  }
}
