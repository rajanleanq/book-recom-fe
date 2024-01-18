/* eslint-disable import/no-anonymous-default-export */
class Auth {
  _isAuthorized: boolean = false;

  constructor() {
    this._isAuthorized = false;
  }

  isAuthorized() {
    return this._isAuthorized;
  }

  setAuthorized() {
    return (this._isAuthorized = true);
  }

  logout() {
    return (this._isAuthorized = false);
  }
}

export default new Auth();
