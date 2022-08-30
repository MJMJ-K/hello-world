/**
 * 은행계좌 추상화한 클래스
 */
class Account {

  static bankName = 'KOREA IT BANK';

  constructor(accountNum, accountOwner, passwd, restMoney) {
    this.accountNum = accountNum;
    this.accountOwner = accountOwner;
    this.passwd = passwd;
    this.restMoney = restMoney;
  }

  // setter /getter 만들기




  //아래 예외처리해주기.
  deposit(money) {
    return this.restMoney += money;
  }

  withdraw(money) {
    return this.restMoney -= money;
  }

  checkPasswd(passwd) {
    this.passwd === passwd;
  }

  getRsetMoney() {
    return this.restMoney;
  }

  toString() {
    return `${this.accountNum}, ${this.accountOwner}, ****, ${this.restMoney}`;
  }

}