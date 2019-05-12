//2.
dmcolors = document.getElementById('colors');
dmbutton = document.getElementById('demo-delete');


dmbutton.addEventListener('click',() =>{
  dmcolors.options[dmcolors.selectedIndex].remove();
}
);

