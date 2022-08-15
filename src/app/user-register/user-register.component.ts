import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalDataStoreageService } from "../local-data-storeage.service";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})

export class UserRegisterComponent implements OnInit {

  public username: string = '';
  public email: string = '';
  public city: string = '';
  public state: string = '';
  public pinCode: string = '';
  public id: string = '';
  public permCity: string = 'Banglore';
  public permstate: string = 'Karnataka';
  public permpinCode: string = '123456';
  public regTab: boolean = true;
  public listTab: boolean  = false;

  users:any = [];
  text : string ='';
  oldText : string ='';
  appState = "default";

  constructor(
    private localDataStoreageService: LocalDataStoreageService
  ) { }

  ngOnInit(): void {
    this.users = this.localDataStoreageService.getTodos();
    this.city = this.permCity;
    this.state = this.permstate;    
    this.pinCode = this.permstate;
  }

  public uesrRegister(): void {
    const id = Math.random();
    const userinfo = {
      id: id.toString(),
      username: this.username,     
      email: this.email,     
      city: this.city ? this.city : this.permCity,     
      state: this.state ? this.state : this.permstate,     
      pinCode: this.pinCode ? this.pinCode : this.permpinCode    
    }
    this.users.push(userinfo);  
    this.localDataStoreageService.addTodo(userinfo);  
    alert("The entered user has been added successfully") ; 
  }  

  public deleteUser(userid: any) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userid) {
        this.users.splice(i, 1);
      }
    }
    this.localDataStoreageService.deleteUser(userid);
  }

  updateAddress() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id  == this.id) {
        if(this.users[i].city !== this.permCity) {
          this.users[i].city = this.city;
        }
      } 
    }
    this.localDataStoreageService.updateTodo(this.id);
  }


  deleteAddress() {
    this.city = '';
    this.state = '';    
    this.pinCode = '';   
  }

  public tabset(tab:string) {
    if(tab === 'R'){
      this.regTab = true;
      this.listTab = false;
    } else {
      this.listTab = true;
      this.regTab = false;
    }

  }

}
