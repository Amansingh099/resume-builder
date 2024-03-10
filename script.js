const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')
const itemWidth =200
const padding = 100

prev.addEventListener('click',()=>{
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})
document.addEventListener('DOMContentLoaded', function() {
  const navbarLinks = document.querySelectorAll('.nav-site'); // Assuming your links have a class 'nav-link'

  navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      console.log(this)
      const targetPosition = targetElement.offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
});