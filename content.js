const quotes = [
  "Believe you can and you're halfway there.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream it. Wish it. Do it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Do something today that your future self will thank you for.",
  "Great things never come from comfort zones.",
  "Dream bigger. Do bigger."
];

// Function to display a motivational popup
function showMotivationalPopup() {
  // Remove existing popup if present
  const existingPopup = document.getElementById("motivational-popup");
  if (existingPopup) {
    existingPopup.remove();
  }

  // Create the popup container
  const popup = document.createElement("div");
  popup.id = "motivational-popup";
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  popup.innerHTML = `
    <div class="popup-content">
      <p>${randomQuote}</p>
      <button id="close-popup">Close</button>
    </div>
  `;

  // Append the popup to the body
  document.body.appendChild(popup);

  // Add event listener to close button
  document.getElementById("close-popup").addEventListener("click", () => {
    popup.remove();
  });

  // Automatically close the popup after 10 seconds
  setTimeout(() => {
    popup.remove();
  }, 10000);
}

// Show a popup every 5 minutes
setInterval(showMotivationalPopup, 5 * 60 * 1000);

// Display the first popup immediately
showMotivationalPopup();
