function deleteByEmail() {
    const emailTds = Array.from(document.querySelectorAll('#customers td:last-child')).map(x => x.innerText);
    const emailInput = document.querySelector('input[name=email]');
    const resultDiv = document.getElementById('result');

    resultDiv.innerText = '';

    const emailInputValue = emailInput.value;

    if (!emailInputValue) { return; }

    const tabledata = emailTds.find(function(td) {return td.innerHTML === emailInputValue});
    // console.log(emailTds[indexTd]);
    
    if (!tabledata) {
        resultDiv.innerText = 'Not found.';
        return;
    } 
        
    tabledata.remove();
    resultDiv.innerText = 'Deleted.';
    
    
    

    emailInput.value = '';
}