function fibonacci(num){
    let arr = [];
    // El array primero vale 0, después 1 y después va iterando:
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }    
    return arr
}

let valoresFibonacci = fibonacci(10)
console.log(valoresFibonacci);

// Resultados depuración:
// valoresFibonacci(10)[
//     0,
//     1,
//     1,
//     2,
//     3,
//     5,
//     8,
//     13,
//     21,
//     34,
//   ]