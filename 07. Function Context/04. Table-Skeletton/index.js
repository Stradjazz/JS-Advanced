function solve(){
   document.querySelector('tbody').addEventListener('click', onClick);

   let rows = Array.from(document.querySelectorAll('tbody > tr'));

   function onClick(e) {
      let clickedRow = e.target.parentNode;
      
      
      if(clickedRow.style.backgroundColor !== '') {
         clickedRow.style.backgroundColor = '';
      } else {
         rows.forEach(r => {
            if (r.style.backgroundColor !== '') {
               r.style.backgroundColor = '';
            } 
         });
         clickedRow.style.backgroundColor = '#413f5e';
      }
      
   }
}
