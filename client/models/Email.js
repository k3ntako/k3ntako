import FetchHelper from './FetchHelper';

export default class Email{
  constructor(){}

  static send( params ){
    return FetchHelper.post('/api/emails', params);
  }
}
