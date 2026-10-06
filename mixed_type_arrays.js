// Task 1: Create the Profile
const profile = [
  "Kay",                       // User name
  25,                          // Age
  true,                        // Subscription status (true = subscribed)
  "Capitol Heights, MD",       // User's location
  ["reading", "hiking"]        // User's hobbies (at least two)
];

// Task 2: Access and Log Profile Details
console.log(profile[0]);        // The user's name
console.log(profile[4][1]);     // The second hobby from the hobbies array

// Task 3: Modify the Profile
profile[1] = 26;                // Update the user's age to a new value
profile[4].push("coding");      // Add a new hobby to the hobbies array

// Task 4: Display the Updated Profile
console.log(profile);
