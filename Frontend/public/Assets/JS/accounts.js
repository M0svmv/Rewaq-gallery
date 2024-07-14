const tabs =document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[content]');


tabs.forEach((tab)=> {
  tab.addEventListener("click",()=>{
  const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent)=> {
      tabContent.classList.remove("active-tab");
    });
    target.classList.add("active-tab");

    tabs.forEach((tab)=>{
      tab.classList.remove("active-tab");
    })

    tab.classList.add("active-tab");
  })
});

const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose =  document.getElementById("nav-close");


if(navToggle) {
  navToggle.addEventListener("click",()=>{
    navMenu.classList.add("show-menu")
  }
)};
if(navClose) {
  navClose.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu")
  }
)};