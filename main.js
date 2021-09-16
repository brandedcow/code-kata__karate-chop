const kchop = require('./kchop4')

const arr1 = []
const arr2 = [1]
const arr3 = [1,3,5]

console.log("1", -1 === kchop(-1, arr1))
console.log("2", -1 === kchop(0, arr1))
console.log("3", -1 === kchop(1, arr1))

console.log("4", -1 === kchop(-1, arr2))
console.log("5", -1 === kchop(0, arr2))
console.log("6", 0 === kchop(1, arr2))
console.log("7", -1 === kchop(2, arr2))

console.log("8", -1 === kchop(-1, arr3))
console.log("9", -1 === kchop(0, arr3))
console.log("10", 0 === kchop(1, arr3))
console.log("11", -1 === kchop(2, arr3))
console.log("12", 1 === kchop(3, arr3))
console.log("13", -1 === kchop(4, arr3))
console.log("14", 2 === kchop(5, arr3))