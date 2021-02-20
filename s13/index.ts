class Student{
    protected id:number;
    protected name:string;
    protected age:number;
    protected classname:string;
    protected grades:number[]
   constructor(userid: number, userName:string, userAge:number, userClass:string,
     userGrades:number[]){
         this.id =userid
         this.name = userName
         this.age = userAge
         this.classname = userClass
         this.grades = userGrades
     }
  hello(){
      console.log('hello')
  }
}

class StudentChild extends Student{
  private address:string;
  constructor(userid: number, userName:string, userAge:number, userClass:string,
    userGrades:number[], address){
    super(userid, userName, userAge,userClass,userGrades)
    this.address=address
    }
}