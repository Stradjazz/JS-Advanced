function solve() {
    const listOfItems = document.getElementById('items');
      let input = document.getElementById('newItemText');
      const newItemText = input.value;
  
      if (!newItemText) {
          return;
      }
      let li = document.createElement('li');
      li.innerText = newItemText;
      listOfItems.appendChild(li);
      input.value = '';
  }
  