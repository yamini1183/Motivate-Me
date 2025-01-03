let intervalId;

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

function showNotification() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icon.png",
    title: "Stay Motivated!",
    message: randomQuote,
  });
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "start") {
    if (!intervalId) {
      intervalId = setInterval(showNotification, 5 * 60 * 1000); // 5 minutes
      showNotification(); // Show the first notification immediately
    }
  } else if (message.action === "stop") {
    clearInterval(intervalId);
    intervalId = null;
  }
});
