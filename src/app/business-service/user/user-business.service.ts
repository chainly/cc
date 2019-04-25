import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserBusinessService {

  constructor() { }

  
  /**
   * 登录
   */
  login(){
    return environment.domain + "/api/login";
  }

  logout(){
    return environment.domain + "/api/logout";
  }

  user(username: string){
    return environment.domain + "/api/users/?format=json&username=" + username;
  }

  group(groupname: string){
    return environment.domain + "/api/groups/?format=json&username=" + groupname;
  }

  defaultUser(){
    return environment.domain + "/api/users/default_user/?format=json";
  }
}
