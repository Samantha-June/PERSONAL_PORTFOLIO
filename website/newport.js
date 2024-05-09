
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

//Scroll to Top/Bottom
// Get the buttons
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var scrollToBottomBtn = document.getElementById("scrollToBottomBtn");

// Initially hide the buttons
scrollToTopBtn.style.display = "none";
scrollToBottomBtn.style.display = "none";

// When the user scrolls
window.onscroll = function() {
  // Show or hide the scroll-to-top button based on the scroll position
  if (window.scrollY > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
  
  // Show or hide the scroll-to-bottom button based on the scroll position
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 20) {
    scrollToBottomBtn.style.display = "none";
  } else {
    scrollToBottomBtn.style.display = "block";
  }
};

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// When the user clicks on the button, scroll to the bottom of the document
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Download CV 
function downloadCV() {
  // Adjust the file path based on its location
  const cvPath = 'https://capeitinitiative-my.sharepoint.com/:b:/g/personal/samantha_calvert_capaciti_org_za/EczUzpF3Z8lMpzw5NVKYNyoB22iq0lqWV7e27X0ep4NYsg?e=nTWvyj';
  const anchor = document.createElement('a');
  anchor.href = cvPath;
  anchor.download = 'Samantha Calvert_Curriculum Vitae (2).pdf';
  anchor.target = '_blank'; // Open in a new tab
  anchor.click();
}
