document.getElementById('ageForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the form from submitting the traditional way

      const ageInput = document.getElementById('age');
      const nameInput = document.getElementById('name');

      // Check if inputs are not empty
      if (ageInput.value.trim() === '' || nameInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
      }

      // Create a promise
      const agePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          const age = parseInt(ageInput.value);
          if (age >= 18) {
            resolve(`Welcome, ${nameInput.value}. You can vote.`);
          } else {
            reject(`Oh sorry, ${nameInput.value}. You aren't old enough.`);
          }
        }, 4000); // Resolving after 4 seconds
      });

      // Handle the promise resolution or rejection
      agePromise.then((message) => {
        alert(message);
      }).catch((message) => {
        alert(message);
      });
    });