let Person = require('./person')
var Student = function(name,age,klass){
  Person.call(this);
  this.class = klass;
  this.name = name;
  this.age = age;
  this.introduce = function (){
    return "My name is "+this.name+". I am "+this.age+" years old. I am a Student. I am at Class "+this.class+"."; 
  }
};
module.exports = Student
