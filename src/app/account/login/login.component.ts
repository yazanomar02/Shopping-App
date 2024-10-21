import { Component, OnInit } from '@angular/core';
import { LoginInfo } from './login-info';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Call } from '@angular/compiler';
import { AmazonAuthService } from '../amazon-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  // loginInfo : LoginInfo = new LoginInfo();

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AmazonAuthService){

  }

  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl(),
    //   rememberme: new FormControl()
    // })

    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(3)]],
      rememberme: false
    });


    this.loginForm.get("password")?.valueChanges.subscribe(value => console.log(value));
  }

  handleLoginFormSubmit(){

    let email = this.loginForm.get("email")?.value;
    let password = this.loginForm.get("password")?.value;

    this.auth.login(email, password);

    console.log(this.loginForm);
  }

  fillData(){
    // يجب إدخال جميع حقول الاوبجكت، أي Put
  //   this.loginForm.setValue({
  //     email: "admin@admin.com",
  //     password: "123123",
  //     rememberme: true
  // });


  // Patch
  this.loginForm.patchValue({
    email: "admin@admin.com",
      password: "123123",
  });
  }
}
