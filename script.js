document.addEventListener("DOMContentLoaded", () => {
  // Only show popup on first visit
  if (!localStorage.getItem("visited")) {
    showPopup();
    localStorage.setItem("visited", "true");
  }
});

function showPopup() {
  // Create overlay
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.6)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "999";

  // Create popup box
  const popup = document.createElement("div");
  popup.style.background = "#fff";
  popup.style.padding = "1.5em";
  popup.style.borderRadius = "12px";
  popup.style.maxWidth = "400px";
  popup.style.textAlign = "center";
  popup.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";

  // Add content
  popup.innerHTML = `
    <h2>Thanks for visiting TechzyNerd!</h2>
    <p>Hope you enjoy exploring my website.</p>
    <button style="
      margin-top:1em;padding:0.5em 1.2em;border:none;
      background:#0d3b66;color:#fff;border-radius:8px;cursor:pointer;
    ">Close</button>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  // Close popup
  popup.querySelector("button").addEventListener("click", () => {
    overlay.remove();
  });
}
