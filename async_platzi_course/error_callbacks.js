function add(a, b, callback){
    setTimeout(()=>{
        if(typeof a !== 'number' || typeof b !== 'number'){
            const error = new Error('Arguments must be numbers');
            callback(error);
        }else{
            callback(null, a + b);
        }
        return;
    }, 2000)
}


add(1, 2, (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
    return;
})