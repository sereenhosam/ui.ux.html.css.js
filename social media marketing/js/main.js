document.addEventListener("DOMContentLoaded", function () {     

  // varible 
  const navBarIcon = document.querySelector('#bar'),
      ofcan =document.querySelector('.ofcan'),
      closeNav = document.querySelector('.close-Nav'),
      links = document.querySelectorAll('nav a'),
      whenOpenMyWebsite = document.querySelector(".center-alert"),
      bgOpacity = document.querySelector(".bg-opacit"),
      closeAlert = document.querySelector(".close-alert");



  // onload 
  document.querySelector('.loading').style.display = 'none';
  document.body.style.overflow = 'visible';

  // header Fixed
  this.onscroll = _=>{
    if (scrollY) {
      document.querySelector('header').style.cssText = ` position: fixed; width: 100%; background: #98d9ff; transition: 0.4s ease; box-shadow: 0 1px 7px #3e3e3e69;`
      links.style.color = `#000; !important`
    }else   document.querySelector('header').style.cssText = ` position: fixed; width: 100%; transition: 0.4s ease; `
    // else document.querySelector('header').style.cssText = `backGround-color : #e5f8ff; transition: 0.4s ease;`
  }

  // nav Bar     
  navBarIcon.addEventListener("click", function () {
    if (ofcan.style.display === "none" || ofcan.style.display === "") {
      ofcan.classList.add('nav-mob');
      ofcan.style.display = 'flex';
    }
    else {
      ofcan.classList.remove('nav-mob');
      ofcan.style.display = 'none';
    }
  });

  closeNav.addEventListener('click', function(){
    ofcan.classList.remove('nav-mob');
    ofcan.style.display = "none";
  });
  
  // active class
  for (const value of links) {      
    value.onclick = _=>{
        clearBg()
        value.classList.add('active');
    };
  };

  function clearBg() {
    for (const value of links) {
          value.classList.remove('active')
    };
  };   

  // go up when you down
  let UP = document.querySelector('.go-up');
  window.onscroll = _=>{
    if (scrollY > 400) {
      UP.style.display ='block';
    }else    UP.style.display ='none';
  }
  UP.addEventListener("click", function () { 
    window.scrollTo({
      top: 0, behavior: "smooth", 
    });
  });
});

// when click on mouse img we go to the down section
function scrollToSection() {
  var targetSection = document.getElementById("targetSection");
  var offsetTop = targetSection.offsetTop;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });

}

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 15,
    }, 
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    }, 
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});