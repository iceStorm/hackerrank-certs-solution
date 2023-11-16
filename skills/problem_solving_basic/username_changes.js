function possibleChanges(usernames) {
  var ans = [];

  for (var u of usernames) {
    if (u.length <= 1) {
      ans.push("NO");
    } else {
      var needsChange = false;
      for (var i = 0; i < u.length - 1; i++) {
        if (u[i] > u[i + 1]) {
          needsChange = true;
          break;
        }
      }

      ans.push(needsChange ? "YES" : "NO");
    }
  }

  return ans;
}
