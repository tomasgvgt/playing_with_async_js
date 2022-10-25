function *gen(array){
    for (let element of array){
        yield element;
    }
}

let generator = gen(['hello', 'how', 'are', 'you', '?']);

function executeGenerator(g){
    let string = ''
    for(i= 0; i<= 4; i++){
        string = string + ' ' + g.next().value
        // console.log(g.next());
    }
    return (string)
}
console.log(executeGenerator(generator));



function* generator(){
    yield 'a';
    yield 'b';
    yield 'c';
}

const g = generator();

console.log(g.next());
console.log(g.next());
console.log(g.next());