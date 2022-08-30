/**
 * 상속을 이용한 마이너스 은행계좌 추상화한 클래스
 */
class MinusAccount extends Account {

  constructor(accountNum, accountOwner, passwd, restMoney, borrowMoney) {
    super(accountNum, accountOwner, passwd, restMoney);
    this.borrowMoney = borrowMoney;
  }

  // setter /getter 만들기 (편의상 생략)

  getBorrowMoney() {
    return this.borrowMoney;
  }


  //재정의(Oberriding)
  getRsetMoney() {
    return super.getRsetMoney() - this.getBorrowMoney();
  }

  toString() {
    return super.toString() + `, ${this.borrowMoney}`;
  }

}