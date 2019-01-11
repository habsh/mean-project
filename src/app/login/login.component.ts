import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: String;
  loginForm: FormGroup;
  users: User[] = [];
  

  constructor(private router: Router) {
    this.title = 'Leave Management Application - Login Form';
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      empId: new FormControl(null, [Validators.required]),
      empPwd: new FormControl(null, [Validators.required])
    });
   this.populateUsers();
    
  }
  populateUsers() {
    this.users.push({
      id: 1,
      name: "user1"
    },
    {
      id: 2,
      name: "user2"
    },
    {
      id: 3,
      name: "user3"
    },
    );
  }

  getUserIdByName(name: string) {
    return this.users.find(user => user.name == name);
  }
  loginValidate() {
    const empId = this.loginForm.get('empId').value;
    const empPwd = this.loginForm.get('empPwd').value;
    console.log(empId);
    console.log(empPwd);

    if (empId !== null && empPwd !== null) {
      console.log(empId);
      console.log(empPwd);

      //TODO: Hardcoding the user id for the time being
      let userId = this.getUserIdByName(empId) != undefined? this.getUserIdByName(empId).id: undefined;

      if (userId != undefined)
        localStorage.setItem("empId", userId.toString());

      console.log('userId :' + userId);
      this.router.navigate([`/dashboard/${empId}`]);
    }
  }
}
