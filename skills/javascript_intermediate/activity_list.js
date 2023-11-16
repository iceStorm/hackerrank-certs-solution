// Define the Activity function
function Activity(amount) {
  this.amount = amount;
}

// Add functions to the Activity prototype
Activity.prototype.setAmount = function (value) {
  if (value <= 0) {
    return false;
  } else {
    this.amount = value;
    return true;
  }
};

Activity.prototype.getAmount = function () {
  return this.amount;
};

// Define the Payment function that inherits from Activity
function Payment(amount, receiver) {
  // Call the parent constructor with the appropriate context (this) and parameters
  Activity.call(this, amount);
  this.receiver = receiver;
}

// Inherit from Activity
Payment.prototype = Object.create(Activity.prototype);
Payment.prototype.constructor = Payment;

// Add functions to the Payment prototype
Payment.prototype.setReceiver = function (newReceiver) {
  this.receiver = newReceiver;
};

Payment.prototype.getReceiver = function () {
  return this.receiver;
};

// Define the Refund function that inherits from Activity
function Refund(amount, sender) {
  // Call the parent constructor with the appropriate context (this) and parameters
  Activity.call(this, amount);
  this.sender = sender;
}

// Inherit from Activity
Refund.prototype = Object.create(Activity.prototype);
Refund.prototype.constructor = Refund;

// Add functions to the Refund prototype
Refund.prototype.setSender = function (newSender) {
  this.sender = newSender;
};

Refund.prototype.getSender = function () {
  return this.sender;
};
