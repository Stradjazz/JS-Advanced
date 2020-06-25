function solve() {
    const list = [];
    let listSize = 0;

    const functionalities = {
        add,
        remove,
        get,
        get size() {return listSize;}
    };

    function add(element) {
       list.push(element);
       list.sort((a, b) => a - b);
       listSize++;
       return functionalities;
    }

    function remove(index) {
        validateIndex(index);
        list.splice(index, 1);
        listSize--;
        
        return functionalities;
    }

    function get(index) {
        validateIndex(index);
        return list[index];
    }

    function validateIndex(index) {
        if (index < 0 || index > list.length - 1) {
            throw new Error ('This index is out of range');
        } 
    }

    return functionalities;
}