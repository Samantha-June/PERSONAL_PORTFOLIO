
  // Toggle responsive navigation on mobile
  document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
      });
    }
  });
  
  // Smooth scrolling for anchor links
  document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          window.scroll({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });

//ABOUT ME
  // Add an interactive feature, such as showing/hiding additional information on button click
  document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-button");
    const additionalInfo = document.getElementById("additional-info");
    
    if (toggleButton && additionalInfo) {
      toggleButton.addEventListener("click", function() {
        additionalInfo.classList.toggle("active");
        toggleButton.textContent = additionalInfo.classList.contains("active") ? "Show Less" : "Show More";
      });
    }
  });

  //SKILLS


  