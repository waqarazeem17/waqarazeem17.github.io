document.addEventListener("DOMContentLoaded", function () {
  const subNavButtons = document.querySelectorAll(".sub-nav button");
  const subSections = document.querySelectorAll(".sub-section");

  subNavButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove "active" class from all buttons
      subNavButtons.forEach(btn => btn.classList.remove("active"));
      // Add active to current
      button.classList.add("active");

      // Hide all sub-sections
      subSections.forEach(sec => sec.style.display = "none");
      // Show selected section
      subSections[index].style.display = "block";
    });
  });

  // Show the first sub-section by default
  if (subNavButtons.length > 0 && subSections.length > 0) {
    subNavButtons[0].classList.add("active");
    subSections.forEach((sec, i) => {
      sec.style.display = i === 0 ? "block" : "none";
    });
  }
});

// Animate On Scroll (AOS) initialization
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Sub-navigation logic
  const subNavButtons = document.querySelectorAll(".sub-nav button");
  const subSections = document.querySelectorAll(".sub-section");

  subNavButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      subNavButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      subSections.forEach(sec => sec.style.display = "none");
      subSections[index].style.display = "block";
    });
  });

  if (subNavButtons.length > 0 && subSections.length > 0) {
    subNavButtons[0].classList.add("active");
    subSections.forEach((sec, i) => {
      sec.style.display = i === 0 ? "block" : "none";
    });
  }
});

// Scroll to sub-section by ID
function scrollToSub(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}


// AOS Init
AOS.init({
  duration: 1000,
  once: true,
});

// Show/hide scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



  function showThankYou(event) {
    event.preventDefault(); // Stop default submission for toast

    const toast = document.getElementById('thankYouToast');

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);

    // Submit the form manually after showing toast
    setTimeout(() => {
      event.target.submit();
    }, 500); // slight delay to let toast show first
  }

