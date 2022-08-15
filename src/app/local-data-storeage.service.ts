import { Injectable } from '@angular/core';
import { UserSet } from './user-set';

@Injectable()
export class LocalDataStoreageService extends UserSet {

  constructor() { 
    super();
    this.load();
   }

   getTodos() {
     let users = JSON.parse(localStorage.getItem('users') || '{}');
     return users;
   }

   addTodo(user: any): void {
      let users = JSON.parse(localStorage.getItem('users') || '{}');
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
   }

   deleteUser(userid: any) {
     let users = JSON.parse(localStorage.getItem('users') || '{}');

     for(let i = 0; i <users.length; i++) {
      if(users[i].id == userid) {
          users.splice(i, 1);
      }
   }
      localStorage.setItem('users', JSON.stringify(users));
   }

     updateTodo(id:any){  
        
   
   }




}