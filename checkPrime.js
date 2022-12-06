let num = 13
let factor = 0;

for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
        factor++
    }
    if (num == 2) {
        console.log("number is prime")
    }
    else {
        console.log("number is not prime")
    }
}
