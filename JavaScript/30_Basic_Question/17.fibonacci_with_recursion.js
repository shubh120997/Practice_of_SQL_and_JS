const fib = (no_of_terms, first_term, second_term) => {
    if(no_of_terms == 1){
        console.log(`${first_term + second_term}`);
        return;
    }
    
    let next = first_term + second_term;
    console.log(`${next} `);
    first_term = second_term;
    second_term = next;
    return fib(no_of_terms - 1, first_term, second_term);
}

fib(10, -1, 1);