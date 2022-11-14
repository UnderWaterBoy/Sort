const allBOX = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click' , event=>{
   if (event.target.tagName !== 'LI') return false;
   let filter = event.target.dataset['f'];
   allBOX.forEach(element => {
      if (!element.classList.contains(filter) && filter !== 'all'){
         element.classList.add('hiden');
      }
      else  
      {
            element.classList.remove('hiden');
         }
   });
});

