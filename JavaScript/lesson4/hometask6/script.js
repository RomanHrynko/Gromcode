let sum = 0;
for (let i = 1; i <= 1000; i += 1) {
  sum += i;
}
const result1 = Math.ceil(sum / 1234);
const result2 = sum % 1234;
console.log(result1 > result2);
