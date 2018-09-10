import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  });
  constructor(private _router:Router, private _user:UserService) { }

  ngOnInit() {
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }

  login(){
    if (this.loginForm.valid){
      this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data);localStorage.setItem('token',data.toString());  this._router.navigate(['/user']);} ,
      error=>console.error(error)
    )
    }
    else{
      console.log('Form is Invalid');return;

    }

    // console.log(JSON.stringify(this.loginForm.value));
    

  }


}
