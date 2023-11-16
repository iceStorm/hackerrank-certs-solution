function Employee(title) {
  this.title = title;
}

Employee.prototype.getTitle = function () {
  return this.title;
};
Employee.prototype.setTitle = function (newTitle) {
  this.title = newTitle;
};

function Engineer(title, isManager) {
  this.title = title;
  this.isManager = isManager;
}
Engineer.prototype.getIsManager = function () {
  return this.isManager;
};
Engineer.prototype.setIsManager = function (isManager) {
  this.isManager = isManager;
};

Object.setPrototypeOf(Engineer.prototype, Employee.prototype);
