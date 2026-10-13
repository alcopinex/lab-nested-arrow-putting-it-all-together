/// Step 1: Define createLoginTracker (Outer Function) accepting userInfo object
const createLoginTracker = (userInfo) => {
  let attemptCount = 0;
  const maxAttempts = 3;

  // Step 2: Implement and return inner arrow function
  return (passwordAttempt) => {
    // If already locked from previous attempts exceeding the limit
    if (attemptCount >= maxAttempts) {
      return "Account locked due to too many failed login attempts";
    }

    attemptCount++;

    // Validate password against userInfo.password
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      // Check if this attempt exceeds max attempts
      if (attemptCount > maxAttempts) {
        return "Account locked due to too many failed login attempts";
      }
      // Allows Attempt 1, 2, and 3 to return failure messages properly
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
};

// Required Export for automated lab testing
module.exports = { createLoginTracker };