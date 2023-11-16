class Account {
  balance = 0;

  constructor(balance) {
    this.balance = balance;
  }

  debit(amount) {
    if (this.balance < amount) {
      return false;
    }

    this.balance -= amount;
    return true;
  }

  credit(amount) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
