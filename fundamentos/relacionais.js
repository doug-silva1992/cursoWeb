console.log('0)', '1' == 1);
console.log('0)', '1' === 1);
console.log('0)', '3' != 3);
console.log('0)', '3' !== 3);

console.log('0)', 3 < 2);
console.log('0)', 3 > 2);
console.log('0)', 3 <= 2);
console.log('0)', 3 >= 2);

const d1 = new Date(0)
const d2 = new Date(0)
console.log('0)', d1 === d2);
console.log('0)', d1 == d2);
console.log('1)', d1.getTime() ===  d2.getTime());

console.log('1)', undefined == null);
console.log('1)', undefined === null);
