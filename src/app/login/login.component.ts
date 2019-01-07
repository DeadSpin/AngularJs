import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      uname: ["", Validators.required],
      psw: ["", Validators.required],
      remember:[]
    });
  }
  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    else{
      if(this.loginForm.controls.uname.value == "Avinash" && this.loginForm.controls.psw.value == "123456"){
        // this.router.navigate(['user-profile']);
        console.log("Done");
      }
    }
  }
}
