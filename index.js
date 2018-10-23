
let balance = 500.00;


class Account {

  constructor(username) {
    this.username = username;
    //  Have the account balance start at $0 since taht makes more sense.
    this._balance = 0;
    this.transactions = [];
  }

  // get balance() {
  //   // Calculate the balance using the transaction objects.
  //   console.log("this.transactions:",this.transactions)
  //   return this._balance;
  // }

  addTransaction(transaction) {
    // console.log("TRANSACTION:", transaction)
    this.transactions.push(transaction);
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    // Keep track of the time of the transaction
    this.time = new Date();
    console.log("TRANSACTION this:", `transaction`)
    // Add the transaction to the account
    this.account.addTransaction(this);
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}

class Withdrawal extends Transaction  {

  get value() {
    return -this.amount;
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("Billybob")
console.log('Starting Balance:', myAccount.balance)

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);

console.log('Balance:', balance);
