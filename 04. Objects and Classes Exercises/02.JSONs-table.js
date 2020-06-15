function JSONsTable(input) {
    const employees = [];
    for (let line of input) { 
        const person = JSON.parse(line);
                
        employees.push(createRow(person));
    }  
    console.log('<table>');
    console.log(employees.join('\n'));
    console.log('</table>');

    function createRow(person) {
        return [
            '\t<tr>',
            `\t\t<td>${person.name}</td>`,
            `\t\t<td>${person.position}</td>`,
            `\t\t<td>${person.salary}</td>`,
            '\t</tr>'
        ].join('\n');
    }
}
