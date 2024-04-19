const navItems = document.querySelector(`.navItems`);
const togglerBtn = document.querySelector(`.toggler`);
const up = document.querySelector(`.top`);
const middle = document.querySelector(`.middle`);
const down = document.querySelector(`.bottom`);
const hideicon = document.querySelector(`.hiddenicon`);
const back = document.querySelector(`.back`);
const next = document.querySelector(`.next`);
const cards = document.querySelector(`.cards`)
const projects = document.querySelectorAll(`.neonSeperator4`)

let slide = 0;



togglerBtn.addEventListener("click", () => {
    navItems.classList.toggle("open");
    up.classList.toggle("newTop");
    middle.classList.toggle("newMiddle");
    down.classList.toggle("newBottom");
    
    

});

if(screen.width<=1200){
  projects.forEach((card) =>{
     card.dataset.aos = ""
  })
}

back.addEventListener('click', () => {
  slide = slide<0 ? slide + 90 : -300
  cards.style.transform = `translateX(${slide}%)` 
})

next.addEventListener('click', () => {
  slide = slide == -300 ? 0 : slide -100
    cards.style.transform = `translateX(${slide}%)`
})









