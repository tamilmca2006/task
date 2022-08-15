export class UserSet {
    load() {
      if(localStorage.getItem('users') === null || localStorage.getItem('users') == undefined) {
        console.log('No users found... Creating...');
        let users: any = [];
  
        localStorage.setItem('users', JSON.stringify(users));
        return 
      } else {
        console.log('User details...');
      }
    }
  }