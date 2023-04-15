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