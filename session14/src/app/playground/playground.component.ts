import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  name = "s14"
  status = true
  user = {
    name : 'hanan',
    age : '23'
  }
  id = 5
  className = "myC"
  colsNo = 3
  bind2 = "<span>property binding</span>"
  cStatus = true
  twoWay ="Hanan"
  rectH:number=0
  rectW:number=0
  constructor() { }

  ngOnInit(): void {
  }
  hello():string{
    return "Helloooo"
  }
  getName(){

    return this.hello
  }
  changeCStatus(){
    this.cStatus = !this.cStatus
  }
  myInputData = ''
  handeleMyInput(myEvent){
    console.log(myEvent.target.value)
    this.myInputData = myEvent.target.value
  }
  handelEsc(myEvent){
    myEvent.target.value=""
    this.myInputData="escapped"
  }
}
