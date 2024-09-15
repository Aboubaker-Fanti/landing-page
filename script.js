const bi_list = document.querySelector('.bi-list');
const responsive_nav = document.querySelector('.responsive_nav');


bi_list.addEventListener('click', () => {
    if (responsive_nav.style.display !== 'none' )
      responsive_nav.style.display = 'none';
    else
      responsive_nav.style.display = 'flex';
})

const prev = document.querySelector('.bi-rewind-btn');
const next = document.querySelector('.bi-fast-forward-btn');
const list = document.querySelector('.image_con');
const itemWidth = 190
const padding = 30

prev.addEventListener('click',()=>{
    console.log("hello i'm here");
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})


const prevo = document.querySelector('.lsts');
const nexto = document.querySelector('.nexxt');
const listo = document.querySelector('.scroo');
const itemWidtho = 190
const paddingo = 30

prevo.addEventListener('click',()=>{
    console.log("hello i'm here");
  listo.scrollLeft -= (itemWidtho + paddingo)
})
nexto.addEventListener('click',()=>{
  listo.scrollLeft += (itemWidtho + paddingo)
})