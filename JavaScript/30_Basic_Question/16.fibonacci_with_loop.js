const fib = (no_of_terms) => {
    let first = -1, second = 1;
    for(let i = 0; i < no_of_terms; i++){
        let next = first + second;
        console.log(`${next} `);
        first = second;
        second = next;
    }
}

fib(10);