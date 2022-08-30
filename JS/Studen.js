//학생을 추상화한 생성자 함수
function Student(ssn, name, korean, english, math) {
  // this = {];
  // this는 window를 뜻함.
  this.ssn = ssn;
  this.name = name;
  this.korean = korean;
  this.english = english;
  this.math = math;
  // console.dir(this);
  // return this;

}

// Student가 참조하고 있는 prototype 객체에 함수 저장
//함수(메소드)
Student.prototype.getSum = function() {
  return this.korean + this.english + this.math;
}

Student.prototype.getAverage = function name(params) {
  return this.getSum() / 3;
}

Student.prototype.toString = function () {
  return `${this.ssn}, ${this.name}, ${this.korean}, ${this.english}, ${this.math}, ${this.getSum()}, ${this.getAverage()}`;
}



function xxx(a) {
  console.log(a);
  // return undefined;
}