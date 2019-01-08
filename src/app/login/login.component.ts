import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  invalidLogin = false;
  username: string;
  password: string;
  users : {
    username: string,
    password: string
  }

  constructor(private formbuilder: FormBuilder, private router: Router, private userservice: UserService) {
    this.loginForm = this.formbuilder.group({
      uname: ["", Validators.required],
      psw: ["", Validators.required],
      remember:[]
    });
   }

  ngOnInit() { }

  onSubmit(post){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    else{
      this.username = post.uname;
      this.password = post.psw;
      this.userservice.login(this.username, this.password).subscribe(users => {
        this.users = users;
        this.router.navigate(["list-users"]);
      },
      error=>{
        this.invalidLogin = true;
      });
    }
  }
}