function solve() {

  //listeners на двата бутона
  let [generate, buy] = [...document.querySelectorAll('button')];
  let [input, output] = [...document.querySelectorAll('textarea')];
  generate.addEventListener('click', onGenerate);
  buy.addEventListener('click', onBuy);
  const tbody = document.querySelector('tbody');

  function onGenerate(e) {
    // четем входа и го парсваме
    const inputData = JSON.parse(input.value);
    //за всеки ред създаваме съответен елемент и го записваме в таблицата
    for (const item of inputData) {
      const row = document.createElement('tr');
      const html =
      `<td><img src="${item.img}"></td><td><p>${item.name}</p></td><td><p>${item.price}</p></td><td><p>${item.decFactor}</p></td><td><input type="checkbox"/></td>`;
      row.innerHTML = html;
      tbody.appendChild(row);
    }

  }
  function onBuy(e) {
    //обхождаме таблицата и вземаме само чекнатите редове
    const boughtFurniture = [...document.querySelectorAll('input')]
      .filter(ch => ch.checked)
      .map(i => i.parentNode.parentNode)
      .map(row => ({
        name: row.children[1].textContent.trim(),
        price: Number(row.children[2].textContent),
        decFactor: Number(row.children[3].textContent)
      }));
    //вадим резултат
    const result = [
      `Bought furniture: ${boughtFurniture.map(f => f.name).join(', ')}`,
      `Total price: ${boughtFurniture.map(f => f.price).reduce((a, b) => a + b)}`,
      `Average decoration factor: ${boughtFurniture.map(f => f.decFactor).reduce((a, b) => a + b) / boughtFurniture.length}`
    ];

    output.value = result.join('\n');

  }

}