// Function to handle range input changes
const rangeInputs = document.querySelectorAll('input[type="range"]');
rangeInputs.forEach(input => {
  input.addEventListener('input', (e) => {
    const ratingId = e.target.id.replace('Input', 'Rating');
    document.getElementById(ratingId).textContent = e.target.value;
  });
});

// Function to handle form submission
function submitProgress() {
  let total = 0;
  const ratings = [
    'loveInput', 'joyInput', 'peaceInput', 'patienceInput', 
    'kindnessInput', 'goodnessInput', 'faithfulnessInput', 
    'gentlenessInput', 'selfcontrolInput'
  ];

  ratings.forEach(id => {
    total += parseInt(document.getElementById(id).value);
  });

  const average = total / ratings.length;
  displayProgressBar(average);
}

// Function to display progress bar
function displayProgressBar(average) {
  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = `${(average / 5) * 100}%`;
  progressBar.style.backgroundColor = average > 4 ? '#4CAF50' : average > 3 ? '#FFC107' : '#FF5722';

  document.getElementById('result').style.display = 'block';
}
