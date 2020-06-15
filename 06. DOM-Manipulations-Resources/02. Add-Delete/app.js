function solve() {
  const items = document.getElementById('items');
  const input = document.getElementById('newText');
  const inputValue = input.value;

  if (!inputValue) {
    return;
  }

  let li = document.createElement('li');
  li.textContent = inputValue;

  let deleteBtn = document.createElement('a');
  let btnText = document.createTextNode('[Delete]');
  deleteBtn.appendChild(btnText);
  deleteBtn.href = '#';
  deleteBtn.addEventListener('click', removeItem);

  li.appendChild(deleteBtn);
  items.appendChild(li);


  function removeItem() {
    li.remove();
  }

  input.value = '';
}
