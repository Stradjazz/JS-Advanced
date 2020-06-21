// function solve(nums, arg) {
//     let sortedArray = () => {
//         if (arg === 'asc') {
//             return nums.sort((a, b) => a - b);
//         } else {
//             return nums.sort((a, b) => b - a);
//         }
//     }
//     return sortedArray();
    
// }

function solve(nums, arg) {
    let sortedArray = () => {
        return arg === 'asc' ?  nums.sort((a, b) => a - b) : nums.sort((a, b) => b - a);
    }
    return sortedArray();
}

console.log(solve([1, 4, 3, 7, 17, 14], 'asc'));
console.log(solve([1, 4, 3, 7, 17, 14], 'desc'));
