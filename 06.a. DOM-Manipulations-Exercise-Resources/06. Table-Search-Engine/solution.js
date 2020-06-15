function solve() {
   
   document.querySelector('#searchBtn').addEventListener('click', onSearch);
   const input = document.querySelector('#searchField');
   function onSearch(e) {
      //read input
      const query =  input.value;
      
      if (query.trim().length !== 0) {
         const tbody = document.querySelector('tbody');
         //remove class select
         [...tbody.querySelectorAll('tr')].forEach(r => {
            r.classList.remove('select');
         });
         //searching matches
         [...tbody.querySelectorAll('td')].forEach(d => {
            if (d.textContent.includes(query)) {
               //add class select
               d.parentNode.classList.add('select');

            }
         });
         input.value = ''; 
      }   
   }
          
}