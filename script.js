const popup = document.getElementById('popup');
const finalMessage = document.getElementById('final');

// Function for the "Yes" button
function sayYes() {
  popup.style.display = 'none';  
  finalMessage.style.display = 'block';  
}

// Function for the "No" button
function sayNo() {
  // Randomly move the popup to a new position on the screen
  const randomX = Math.random() * (window.innerWidth - 300); 
  const randomY = Math.random() * (window.innerHeight - 300); 
  
  popup.style.left = randomX + 'px';
  popup.style.top = randomY + 'px';
}
