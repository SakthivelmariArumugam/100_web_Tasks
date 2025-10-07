const Panels=document.querySelectorAll('.panel');
Panels.forEach((panel)=>{
     panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add('active');
     });
})
function removeActiveClasses(){
  Panels.forEach((panel)=>{
    panel.classList.remove('active');
  });
}
