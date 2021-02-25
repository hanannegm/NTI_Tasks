import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  flag :any = null
  loginForm = new FormGroup({
    
    email:new FormControl('', [Validators.required, Validators.required]),
    password:new FormControl('',[Validators.required] )
 
  })

  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }
get email(){return this.loginForm.get('email')}
get password(){return this.loginForm.get('password')}
handelLogin(){
  if(this.loginForm.valid){
    console.log(this.loginForm.value)
    this._user.loginUser(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      res=>{console.log(res)},
      err=>{console.log('error')}
    )
  }
  else console.log('error')
}
}
