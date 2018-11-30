import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.loginform = this.formbuilder.group({
      uname: ["", Validators.required],
      psw: ["", Validators.required],
      remember:[]
    });
  }
  onSubmit(){
    this.submitted = true;
    console.log('test');
    if(this.loginform.invalid){
      console.log('test1');
      return;
    }
  }
}
