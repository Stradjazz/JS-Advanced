function wordsUppercase(input) {
    
    let words = input.split(/[\W]+/);
    let filtered = words.filter(Boolean);
    console.log(filtered.join(', ').toUpperCase());
    
}
