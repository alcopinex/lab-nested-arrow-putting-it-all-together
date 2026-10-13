// Step 1: Define createLoginTracker (Outer Function) accepting userInfo object
const createLoginTracker = (userInfo) => {
  // Initialize tracking variable inside closure scope
  let attemptCount = 0;
  const maxAttempts = 3;

  // Step 2: Implement and return inner arrow function
  return (usernameAttempt, passwordAttempt) => {
    // Check if account is already locked
    if (attemptCount >= maxAttempts) {
      return "Account Locked";
    }

    // Increment attemptCount on every attempt
    attemptCount++;

    // Validate credentials
    const isUsernameValid = usernameAttempt === userInfo.username;
    const isPasswordValid = passwordAttempt === userInfo.password;

    if (isUsernameValid && isPasswordValid) {
      return "Login Successful!";
    } else {
      // Check if this failed attempt reached max attempts
      if (attemptCount >= maxAttempts) {
        return "Account Locked";
      }
      return "Invalid Credentials";
    }
  };
};

// Required Export for automated lab testing
if (typeof module !== "undefined") {
  module.exports = { createLoginTracker };
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};