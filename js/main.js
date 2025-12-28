//menu-button
const mobileBtn = document.getElementById('mobile-btn');
const navbar_pg = document.getElementById('navbar-pg');
const line2 = document.querySelector('.line2');

mobileBtn.addEventListener('click', () => {
   
    if((!navbar_pg.classList.contains('nav-active')) || (navbar_pg.classList.contains('nav-deactive'))){
        line2.classList.add('line2-active');
        line2.classList.remove('line2-deactive');
        navbar_pg.classList.add('nav-active');
        navbar_pg.classList.remove('nav-deactive');
    }
    else if(navbar_pg.classList.contains('nav-active')){
        line2.classList.remove('line2-active');
        line2.classList.add('line2-deactive');
        navbar_pg.classList.remove('nav-active');
        navbar_pg.classList.add('nav-deactive');
    }
});

//remove menu on link click (mobile)
// const navLinks = document.querySelectorAll('.navbar-pg a');
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         if(navbar_pg.classList.contains('nav-active')){
//             navbar_pg.classList.remove('nav-active');
//             navbar_pg.classList.add('nav-deactive');
//         }   
//     });
// });

//remove # from url after clicking anchor link
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function () {
        setTimeout(() => {
            history.replaceState(null, null, ' ');
        }, 1);
    });
});

//emailjs integration
(function () {
  emailjs.init("-YTZzuwqBShyxD_D-");
})();

const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const statusMsg = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  submitBtn.value = "Sending...";
  emailjs.sendForm(
    "service_z9p4elg",
    "template_l086ikl",
    this
  ).then(
    () => {
      statusMsg.textContent= "✅ Message sent successfully!";
      submitBtn.value = "Send Message";
      statusMsg.style.display = "block";
      setTimeout(() => {
        statusMsg.style.display = "none";
      }, 2000);
      form.reset();
    },
    () => {
      statusMsg.textContent= "Failed to send message.";
      submitBtn.value = "Send Message";
      statusMsg.style.display = "block";
      setTimeout(() => {
        statusMsg.style.display = "none";
      }, 3000);
      statusMsg.textContent= "✅ Message sent successfully!";
    }
  );
});
