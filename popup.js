document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("new-quote").addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("quote").textContent = quotes[randomIndex];
    });
  });
  
  