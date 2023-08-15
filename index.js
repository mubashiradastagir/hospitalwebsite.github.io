// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    for (const link of navLinks) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        const headerOffset = 80; // Adjust this value based on your header height
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;
  
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        });
      });
    }
  });
  
  // Form submission
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = form.elements.name.value;
      const email = form.elements.email.value;
      const message = form.elements.message.value;
  
      // Here, you can add your code to handle the form submission (e.g., send the form data to a server).
  
      // For example, you can use Fetch API to send the form data to a server:
      // const formData = { name, email, message };
      // fetch('your-server-endpoint', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   // Handle the server response if needed
      //   console.log(data);
      // })
      // .catch(error => {
      //   console.error('Error:', error);
      // });
  
      // For this example, we'll just reset the form fields after submission
      form.reset();
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const menuItems = document.querySelectorAll("nav ul li");
    const nav = document.querySelector("nav");

    menuIcon.addEventListener("click", function() {
        menuItems.forEach(item => {
            item.classList.toggle("hidden");
        });
    });

    // Add a scroll event listener to toggle the sticky class
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    });
});

 