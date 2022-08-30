//학생을 추상화한 생성자 함수
class Student2 {

  // static 프로퍼티
  static schoolName = 'KOREA IT SCHOOL';

  // static 함수
  static study() {
    console.log('모든 학생은 열심히 공부할까?');
  }

  constructor(ssn, name, korean, english, math) {
    //자바로는 인스턴스 변수?
  this.ssn = ssn;
  this.name = name;
  this.korean = korean;
  this.english = english;
  this.math = math;
}

set ssn(ssn) {
  this._ssn = ssn;
}
get ssn() {
  return this._ssn;
}

set name(name) {
  if (name == undefined){
    throw new Error("이름을 입력하여 주세요.") //runtime 립센션
  }
  this._name = name;
}
get name() {
  return this._name;
}

set korean(korean) {
  this._korean = korean;
}
get korean() {
  return this._korean;
}

set english(english) {
  this._english = english;
}
get english() {
  return this._english;
}

set math(math) {
  this._math = math;
}
get math() {
  return this._math;
}

// Student가 참조하고 있는 prototype 객체에 함수 저장
//함수(메소드)
getSum()  {
  return this.korean + this.english + this.math;
}

getAverage () {
  return this.getSum() / 3;
}

toString () {
  return `${this.ssn}, ${this.name}, ${this.korean}, ${this.english}, ${this.math}, ${this.getSum()}, ${this.getAverage()}`;
}

}
