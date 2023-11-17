class User {
  /**
   * @param {string} userName
   */
  constructor(userName) {
    this.userName = userName;
  }

  getUsername() {
    return this.userName;
  }

  /**
   * @param {string} userName
   */
  setUsername(userName) {
    this.userName = userName;
  }
}

class ChatUser extends User {
  /**
   * @param {string} userName
   */
  constructor(userName) {
    super(userName);

    this.warningCount = 0;
  }

  giveWarning() {
    this.warningCount++;
  }

  getWarningCount() {
    return this.warningCount;
  }
}
