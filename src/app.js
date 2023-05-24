// app.js

const submitMessage = document.getElementById('submit-message');
//create a new entry object
const newEntry = {
    name: name,
    age: age,
    weight: weight,
    height: height,
};

// Call a function to append the new entry to the fitness_data.json file
appendData(newEntry);

// Display the submit message
submitMessage.textContent = 'Submitted';
setTimeout(function() {
  submitMessage.textContent = '';
}, 3000);
;
