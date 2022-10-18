const navToggle = document.getElementById('nav_toggle');
const navLinks = document.querySelectorAll('.nav-link');
const mainNav = document.getElementById('main_nav');
const hamburgerNav = document.getElementById('hamburger_nav');
// Card Animation
const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

// Timeout for placeholder

setTimeout(getData, 2500);


function getData() {
  header.innerHTML = '<img src="assets/img/designBoard_2.png" alt="" class="portfolio_img">';
  title.innerHTML= 'Lorem ipsum doloar sit amet';
  excerpt.innerHTML='Mollit velit consectetur officia dolore laborum culpa cillum exercitation id laboris dolore ea. Amet sunt veniam occaecat voluptate labore pariatur adipisicing veniam laborum ipsum ullamco. Laboris velit tempor elit aliqua adipisicing incididunt. Incididunt magna minim duis incididunt ipsum aliqua tempor id commodo mollit proident sunt in officia. Sint minim id irure minim occaecat labore.';
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="random">';
  name.innerHTML='John Doe';
  date.innerHTML='Oct 08, 2022';

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}

const size = window.matchMedia("(min-width: 725px)")

winSize(size);

function winSize(size) {
  if (size.matches){
    hamburgerNav.classList.add('hidden');
    mainNav.classList.remove('hidden');
    console.log("screen is at least 600px")
  }
  else{
    hamburgerNav.classList.remove('hidden');
    mainNav.classList.add('hidden');
    console.log("Screen less than 600px")
  }
};




navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});




window.addEventListener('resize', function() {
  if (size.matches){
    hamburgerNav.classList.add('hidden');
    mainNav.classList.remove('hidden');
    console.log("screen is at least 600px")
  }
  else{
    hamburgerNav.classList.remove('hidden');
    mainNav.classList.add('hidden');
    console.log("Screen less than 600px")
  }
});

// window.addEventListener("resize", function() {
//   if (window.matchMedia("(min-width: 500px)").matches) {
//     console.log("Screen width is at least 500px")
//   } else {
//     console.log("Screen less than 500px")
//   }
// })