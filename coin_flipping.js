function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// const noMondays = new Promise( (resolve, reject) => {
//     if(new Date().getDay() !== 1) {
//         resolve("Good, it's not Monday!");
//     } else {
//         reject("Someone has a case of the Mondays!");
//     }
// });
// noMondays
//     .then( res => console.log(res) )
//     .catch( err => console.log(err) );

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // your code here!
        let headsCount = 0;
    let attempts = 0;
   while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
        resolve("'heads' has been flipped five times'");
    }
    while(attempts>100){
        reject("Coins where  flipped more than 100 time!");  
    }
     return `It took ${attempts} tries to flip five "heads"`;
    });
    
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );