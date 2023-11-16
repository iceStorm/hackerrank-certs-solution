/**
 * @param {number} level
 * @param {string} sep
 */
function joinedLogger(level, sep) {
  return function f(...messages) {
    const joinedMessage = messages
      .filter((m) => m.level >= level)
      .map((m) => m.text)
      .join(sep);

    logger({
      text: joinedMessage,
    });
  };
}
