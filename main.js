let menu= document.getElementById('menu');
let nav= document.getElementById('nav');
let exit= document.getElementById('exit');
menu.addEventListener('click',function(e){
  nav.classList.add('show');
  e.preventDefault();
});
exit.addEventListener('click',function(e){
  nav.classList.remove('show');
  e.preventDefault();
});
