//Create a strory with promises.

const mithologyDatabase = {
    characters: ['Aquiles', 'Odyseus', 'Agamemnon', 'Helen', 'Menelaus', 'Paris'],
    places: ['Troy', 'Ithaca'],
    gods: ['Athena', 'Poseidon'],
}


//Create a function that returns a promise, we need to pass time and a callback to be executed inside the function.
let secondsToFinish = 5;
function greekMithology(time, callback){
    return new Promise((resolve, reject)=>{
        if(secondsToFinish > 0){
            setTimeout(()=>{
                callback();
                if(secondsToFinish <= 1){
                    console.log(`Im falling sleep, In ${secondsToFinish} seconds I will stop the story`);
                }
                secondsToFinish--;
                resolve();
            }, time);
        }else{
            reject('I fell Sleep, good nite');
        }
    })
}

greekMithology(2000, ()=>{
    console.log('WELCOME TO A GREEK MYTHOLOGY BEDTIME STORY');
})
.then(()=>{
   return greekMithology(1000, ()=>{
        console.log(`${mithologyDatabase.characters[3]} \
was Kidnapped by ${mithologyDatabase.characters[5]} \
and taken to ${mithologyDatabase.places[0]}`)
    })
})
.then(()=>{
    return greekMithology(2000, ()=>{
        console.log(`Trojan war started.`)
    })
})
.then(()=>{
    return greekMithology(2000, ()=>{
        console.log(`${mithologyDatabase.characters[2]} and ${mithologyDatabase.characters[4]} won thew war.`)
    })
})
.then(()=>{
    return greekMithology(2000, ()=>{
        console.log(`${mithologyDatabase.gods[1]} fucked ${mithologyDatabase.characters[1]}.`)
    })
})
.then(()=>{
    return greekMithology(2000, ()=>{
        console.log(`${mithologyDatabase.gods[0]} helped ${mithologyDatabase.characters[1]}.`)
    })
})
.then(()=>{
    return greekMithology(2000, ()=>{
        console.log(`${mithologyDatabase.characters[1]} returned home.`)
    })
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log(`Go to sleep and dream with the gods`)
})


let secondsToFinish = 2;
function greekMithology(time){
    return new Promise((resolve, reject)=>{
        if(secondsToFinish > 0){
            setTimeout(()=>{
                if(secondsToFinish <= 1){
                    console.log(`Im falling sleep, In ${secondsToFinish} seconds I will stop the story`);
                }
                secondsToFinish--;
                resolve();
            }, time);
        }else{
            reject('I fell Sleep, good nite');
        }
    })
}

const story = async function(){
    try{
        console.log('WELCOME TO A GREEK MYTHOLOGY BEDTIME STORY');

        await greekMithology(2000);
        console.log(`${mithologyDatabase.characters[3]} \
        was Kidnapped by ${mithologyDatabase.characters[5]} \
        and taken to ${mithologyDatabase.places[0]}`);



    }catch(error){

    }finally{

    }
}


