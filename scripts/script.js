// Fetch questions from API and update the UI
function fetchQuestions() {
    // Make an API call to retrieve questions and answers
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint

    fetch('YOUR_API_ENDPOINT')
      .then(response => response.json())
      .then(data => {
        // Update UI with question and answers
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');

        questionElement.textContent = data.question;

        data.answers.forEach(answer => {
          const li = document.createElement('li');
          li.textContent = answer;
          answersElement.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }

  // Handle user's answer submission
  function submitAnswer() {
    // Check the selected answer
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
      alert('Please select an answer!');
      return;
    }

    // Make an API call to validate the answer
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint

    fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      body: JSON.stringify({ answer: selectedAnswer.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Display the result
        const resultElement = document.getElementById('result');
        resultElement.textContent = data.correct ? 'Correct!' : 'Incorrect!';

        // Show the result container
        const resultContainer = document.getElementById('result-container');
        resultContainer.style.display = 'block';

        // Disable the submit button
        const submitButton = document.getElementById('submit');
        submitButton.disabled = true;
      })
      .catch(error => {
        console.error('Error submitting answer:', error);
      });
  }

  // Handle next question button click
  function nextQuestion() {
    // Clear previous question and answers
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    questionElement.textContent = '';
    answersElement.innerHTML = '';

    // Hide the result container
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'none';

    // Enable the submit button
    const submitButton = document.getElementById('submit');
    submitButton.disabled = false;

    // Fetch the next question
    fetchQuestions();
  }

  // Event listeners
  document.getElementById('submit').addEventListener('click', submitAnswer);
  document.getElementById('next').addEventListener('click', nextQuestion);

  // Initial setup
  fetchQuestions();