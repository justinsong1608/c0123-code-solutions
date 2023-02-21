/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function deposit(amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  } else {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  }
};

Account.prototype.withdraw = function withdraw(amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  } else {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  }
};

Account.prototype.getBalance = function () {
  var sum = 0;
  if (this.transactions.length === 0) {
    return 0;
  } else {
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'withdrawal') {
        sum -= this.transactions[i].amount;
      } else {
        sum += this.transactions[i].amount;
      }
    }
  }
  return sum;
};
