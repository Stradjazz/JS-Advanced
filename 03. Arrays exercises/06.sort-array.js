function sortArray(input) {
    input.sort(
        function compareItems(a, b) {
            if (a.length < b.length) {
                return -1;
            } else if (a.length > b.length) {
                return 1;
            } else {
                a = a.toUpperCase();
                b = b.toUpperCase();
                if (a < b) {
                    return -1;
                } else if(a > b) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
        
    );

    input.forEach(item => console.log(item));
}
