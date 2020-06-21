function create(words) {
   const contentContainer = document.getElementById('content');
   const titles = [...words];

   for (const title in titles) {
      let parentDiv = document.createElement('div');
      let p = document.createElement('p');
      
      contentContainer.appendChild(parentDiv);
      parentDiv.appendChild(p).style.display = 'none';
      p.textContent = titles[title];

      parentDiv.addEventListener('click', () => {p.style.display = 'block'});
   }
   
}