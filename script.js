document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons and panels
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabPanels.forEach((panel) => panel.classList.remove("active"));
  
        // Add active class to the clicked button and the corresponding panel
        button.classList.add("active");
        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
      });
    });
  });
  