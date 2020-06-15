class Hex {
    constructor(value) {
        this.value = value;
    }
    
    valueOf() {
        return this.value ;
    }

    toString() {
        let num = Number(this.value);
       
        return `0x${num.toString(16).toUpperCase()}`;
    }

    plus(num) {
        let sum = this.value + num;
        return new Hex(sum);
    }

    minus(num) {
        let sum = this.value - num;
        return new Hex(sum);
    }

    parse() {
        let hexString = this.value.slice(2);
        return parseInt(hexString, 16);
    }
    
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(a.minus(b).toString());
let result = new Hex(a.minus(b).toString());
console.log(result.parse());

