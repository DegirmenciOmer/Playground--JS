let num = 0;
async function increment() {
    num += await 3;
    console.log(num);
}

increment();
num += 1;
console.log(num);

increment();

console.log(num);
