//header effect when scrolling
const element = document.querySelector('.header');

window.onscroll = () => {
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPos > 84) {
    element.classList.add('active');
  } else {
    element.classList.remove('active');
  }
}

// const header = document.querySelector('.header');

// let prevScrollPos = window.pageYOffset;

// // Fungsi untuk menangani event scroll
// function handleScroll() {
//   const currentScrollPos = window.pageYOffset;

//   if (currentScrollPos > prevScrollPos && currentScrollPos > 80) {
//     // Scroll down lebih dari 80px
//     header.style.top = '-80px';
//   } else {
//     // Scroll up atau belum melewati 80px
//     header.style.top = '0';
//   }

//   prevScrollPos = currentScrollPos;
// }

// // Tambahkan event listener untuk event scroll
// window.addEventListener('scroll', handleScroll);

const header = document.querySelector('.header');

let prevScrollPos = window.pageYOffset;

// Fungsi untuk menangani event scroll
function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos && currentScrollPos > 80) {
    // Scroll down lebih dari 80px
    header.style.top = '-80px';
    header.style.transition = 'top ease-in-out 0.8s';
  } else {
    // Scroll up atau belum melewati 80px
    header.style.top = '0';
    header.style.transition = 'top ease-in-out 0.5s';
  }

  prevScrollPos = currentScrollPos;
}

// Tambahkan event listener untuk event scroll
window.addEventListener('scroll', handleScroll);





