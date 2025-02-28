// Define the dodger element
const dodger = document.getElementById('dodger');

// Set initial position if not already set
if (!dodger.style.left) {
  dodger.style.left = '180px'; // Start in the middle
}

// Function to move the dodger to the left
function moveDodgerLeft() {
  const leftNumbers = parseInt(dodger.style.left);
  
  // Only move if not at the leftmost edge
  if (leftNumbers > 0) {
    // Move the dodger 10 pixels to the left
    dodger.style.left = `${leftNumbers - 10}px`;
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  const leftNumbers = parseInt(dodger.style.left);
  
  // Only move if not at the rightmost edge (360)
  if (leftNumbers < 360) {
    // Move the dodger 10 pixels to the right
    dodger.style.left = `${leftNumbers + 10}px`;
  }
}
