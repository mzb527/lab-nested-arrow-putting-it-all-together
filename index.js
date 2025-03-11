function createLoginTracker(userInfo) {
  let attemptCount = 0; // Initialize attempt count

  // Return an arrow function
  return (passwordAttempt) => {
      attemptCount++; // Increment attempt count

      if (passwordAttempt === userInfo.password && attemptCount <= 3) {
          return "Login successful";
      } else if (attemptCount <= 3) {
          return `Attempt ${attemptCount}: Login failed`;
      } else {
          return "Account locked due to too many failed login attempts";
      }
  };
}

// Example usage
const userInfo = { username: "testUser", password: "securePassword" };
const loginTracker = createLoginTracker(userInfo);

console.log(loginTracker("wrongPassword")); // Attempt 1: Login failed
console.log(loginTracker("anotherWrong"));  // Attempt 2: Login failed
console.log(loginTracker("securePassword")); // Attempt 3: Login failed
console.log(loginTracker("securePassword")); // Account locked due to too many failed login attempts



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};