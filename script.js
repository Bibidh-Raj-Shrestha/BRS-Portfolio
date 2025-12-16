//menu-button
const mobileBtn = document.getElementById('mobile-btn');
const navbar_pg = document.getElementById('navbar-pg');
mobileBtn.addEventListener('click', () => {
   
    if((!navbar_pg.classList.contains('nav-active')) || (navbar_pg.classList.contains('nav-deactive'))){
        navbar_pg.classList.add('nav-active');
        navbar_pg.classList.remove('nav-deactive');
    }
    else if(navbar_pg.classList.contains('nav-active')){
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

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_z9p4elg",
    "template_l086ikl",
    this
  ).then(
    () => {
      alert("Message sent successfully!");
      form.reset();
    },
    () => {
      alert("Failed to send message.");
    }
  );
});
