// const reverseSeq = n => {
//     const results = []
//     for (let i = n; i > 0; i--) {
//       results.push(i);
//     }
//     return results;
//   };

// console.log(reverseSeq(5));


const reverseSeq = n => {
    const results = [];
    for( let i = 1; i <= n; i++) {
        results.push(i);
    }
    return results.reverse();
}

console.log(reverseSeq(5));