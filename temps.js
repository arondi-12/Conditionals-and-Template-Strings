function checkAccess(age) {
  if (age === undefined || age === null) {
    return "Invalid age";
  } else if (age < 18) {
    return "Access denied. You are too young.";
  } else if (age >= 18 && age < 65) {
    return "Access granted";
  } else if (age >= 65) {
    return "Access denied. You are too old.";
  }
}
function bookFlight(age, hasPassport, isFlightAvailable) {
  if (age >= 18 && age <= 70 && hasPassport && isFlightAvailable) {
    return "Booking successful";
  } else {
    return "Booking failed";
  }
}
function checkJobEligibility(age, yearsExperience, knowsJavaScript) {
  if (age > 25 && age < 50 && knowsJavaScript) {
    if (yearsExperience > 5 || (age < 30 && yearsExperience >= 3)) {
      return "Eligible for the job";
    }
  }
  return "Not eligible";
}
let firstname = "Davis";
let secondname = "Martin";
let welcome = "Hello" + "" + firstname + secondName + "Welcome to our website";
console.log(welcome);
