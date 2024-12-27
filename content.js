// function showMotivationalPopup() {
//     // Remove existing popup if present
//     const existingPopup = document.getElementById("motivational-popup");
//     if (existingPopup) {
//       existingPopup.remove();
//     }
  
//     // Create wrapper div
//     const popup = document.createElement("div");
//     popup.id = "motivational-popup";
    
//     // Get random quote
//     const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
//     // Set popup content
//     popup.innerHTML = `
//       <div class="popup-content">
//         <p>${randomQuote}</p>
//         <button id="close-popup">Close</button>
//       </div>
//     `;
  
//     // Append to body
//     document.body.appendChild(popup);
  
//     // Add close button functionality
//     document.getElementById("close-popup").addEventListener("click", () => {
//       popup.remove();
//     });
  
//     // Auto remove after 10 seconds
//     setTimeout(() => {
//       if (popup && document.body.contains(popup)) {
//         popup.style.animation = 'slideUp 0.3s ease-out';
//         setTimeout(() => popup.remove(), 300);
//       }
//     }, 10000);
//   }
  
//   // Set up alarm for periodic popups
//   chrome.runtime.sendMessage({ action: "createAlarm" });
  
//   chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === "showPopup") {
//       showMotivationalPopup();
//     }
//   });
  
//   // Show first popup immediately
//   showMotivationalPopup();

// function showMotivationalPopup() {
//     // Remove existing popup if present
//     const existingPopup = document.getElementById("motivational-popup");
//     if (existingPopup) {
//       existingPopup.remove();
//     }
  
//     // Create wrapper div
//     const popup = document.createElement("div");
//     popup.id = "motivational-popup";
    
//     // Get random quote
//     const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
//     // Set popup content
//     popup.innerHTML = `
//       <div class="popup-content">
//         <p>${randomQuote}</p>
//         <button id="close-popup">Close</button>
//       </div>
//     `;
  
//     // Append to body
//     document.body.appendChild(popup);
  
//     // Add close button functionality
//     document.getElementById("close-popup").addEventListener("click", () => {
//       popup.remove();
//     });
  
//     // Auto remove after 10 seconds
//     setTimeout(() => {
//       if (popup && document.body.contains(popup)) {
//         popup.style.animation = 'slideUp 0.3s ease-out';
//         setTimeout(() => popup.remove(), 300);
//       }
//     }, 10000);
//   }
  
function showMotivationalPopup() {
    // Remove existing popup if present
    const existingPopup = document.getElementById("motivational-popup");
    if (existingPopup) {
      existingPopup.remove();
    }
  
    // Create wrapper div
    const wrapper = document.createElement("div");
    wrapper.id = "motivational-popup";
  
    // Create shadow root
    const shadowRoot = wrapper.attachShadow({ mode: 'open' });
  
    // Get random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    // Set popup content
    shadowRoot.innerHTML = `
      <style>
        #popup {
          all: initial;
          position: fixed !important;
          top: 20px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          background-color: #ffffff !important;
          padding: 15px 20px !important;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
          border-radius: 8px !important;
          z-index: 10000 !important;
          width: 300px !important;
          max-width: 90% !important;
          font-family: Arial, sans-serif !important;
          text-align: center !important;
        }
        #popup p {
          margin: 0 0 15px 0 !important;
          font-size: 14px !important;
          line-height: 1.4 !important;
          color: #333 !important;
        }
        #popup button {
          padding: 5px 15px !important;
          background-color: #007BFF !important;
          color: #ffffff !important;
          border: none !important;
          border-radius: 4px !important;
          cursor: pointer !important;
          font-size: 14px !important;
        }
        #popup button:hover {
          background-color: #0056b3 !important;
        }
        @keyframes slideDown {
          from {
            top: -100px;
            opacity: 0;
          }
          to {
            top: 20px;
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            top: 20px;
            opacity: 1;
          }
          to {
            top: -100px;
            opacity: 0;
          }
        }
        #popup {
          animation: slideDown 0.3s ease-out;
        }
      </style>
      <div id="popup">
        <p>${randomQuote}</p>
        <button id="close-popup">Close</button>
      </div>
    `;
  
    // Append to body
    document.body.appendChild(wrapper);
  
    // Add close button functionality
    shadowRoot.getElementById("close-popup").addEventListener("click", () => {
      wrapper.remove();
    });
  
    // Auto remove after 10 seconds
    setTimeout(() => {
      if (wrapper && document.body.contains(wrapper)) {
        shadowRoot.querySelector('#popup').style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => wrapper.remove(), 300);
      }
    }, 10000);
  }
  