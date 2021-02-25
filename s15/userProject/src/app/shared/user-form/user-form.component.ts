import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
handelRegister(obj){
 console.log(obj)
  console.log(this.user)
  this._user.registerUser(this.user).subscribe(res=>{
    if(res.apStstus){
      this.msg="Registerd"
      this.user={

    }
    }
  })
}
}