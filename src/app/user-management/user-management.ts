import { Component } from '@angular/core';
import {User} from './user.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-management',
  imports: [
    FormsModule
  ],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css',
})
export class UserManagement {

  users: User[] = [
    {id: 1, name: 'Kiss Károly', email:'kk@mail.com',age:25},
    {id: 2, name: 'Kiss Anna', email:'ka@mail.com',age:40},
    {id: 3, name: 'Kiss Luca', email:'kl@mail.com',age:22}
  ];

  newUser: User = {id:0, name:'',email:'',age:0};
  editingUser: User | null = null;

  addUser(){
    if(this.newUser.name &&this.newUser.email &&this.newUser.age){
      this.newUser.id = this.users.length + 1;
      this.users.push(this.newUser);
      this.newUser = {id:0, name:'',email:'',age:0};
    }
  }

  editUser(user: User){
    this.editingUser = user;
  }

  updateUser(){
    if(this.editingUser){
      const index =
        this.users.findIndex(user => user.id === this.editingUser!.id);
      if(index > -1){
        this.users[index] = this.editingUser;
      }
      this.editingUser = null;
    }
  }

  deleteUser(id: number){
    this.users = this.users.filter(user => user.id !== id);
  }


}
