// person =>fname, lname, age =>get full name, get year of birth
// student => all person , sub= [{subName, grade} ] - add  sub, show all subjects
// teacher => person , sal - get net salary (salary-10%)

////////////////////Task/////////////////
class Person{
    constructor(fName, lName, age){
        this.fName = fName
        this.lName = lName
        this.age = age
       
    }

    
getFullName(){
  return 'FullName: ${this,fName}.${this.lname}';
}    
// getYearoFBirth(){
//  let year = new Date();
//  let yearOfBirth  year . getFullYear - this.age;
//  return 'Year of Birth: ${getYearoFBirth}'
// }
}

class Student extends Person{
    constructor(fname, lname, age){
        super(fname, lname, age)
        
    }
addSubject(sName,sGrade){
    this.addSubject.push({ sName: sName, sGrade:sGrade});
}
 showAllSubject(){
     return this.subject;
 }
}

class Teacher extends Person{
    constructor(fname, lname, age, salary){
        super(fname, lname, age)
        this.salary=salary
        
    }
   getnet(){
       const s =this.salary=0.1
       console.log('Net Salary is ${this.salary-s}')
   }
}
const P = new Student('Hanan', 'Nagm',20,)

////////////////////////////////////////////////////////////////////////
class User{
    constructor(userName){
        this.userName = userName
    }
    getUserName(){
        return this.userName
    }
}
class Post extends User{
    constructor(userName, post, likes=0, comments=0, commentsDetails =[]){
        super(userName)
        this.post =post
        this.likes = likes
        this.comments = comments
        this.commentsDetails= commentsDetails
    }
    getPost(){
        console.log(`
        UserName: ${this.userName}
        post: ${this.post}
        likes: ${this.likes}
        comments: ${this.comments}
        commentsDetails: ${this.commentsDetails}
        `)
    }
    addLikes(){
        this.likes++
    }
    removeLikes(){
        this.likes--
    }
    addComments(commentBody){
        this.commentsDetails.push(commentBody)
        this.comments++
    }
    deleteComments(index){
        this.comments--
        this.commentsDetails.splice(index,1)
    }
}



let p = new Post('marwa', 'test post')
p.getPost()
console.log(p.getUserName())