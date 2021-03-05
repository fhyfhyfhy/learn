import {observable, action} from 'mobx';
import {login} from '../api/user';

class Store {
  @observable
  token = '';

  @action
  async login(form) {
    const res = await login(form);
    console.log(res);
  }
}

export default new Store();
