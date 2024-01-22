
// function fibonacciGenerator(n) {
//     let output = [];
//     let t1="";
//     let t2 ="";
//     let t3="";
//     for (i=0; i<n; i++)
//         if(i===0) {
//             output = [i]; 
//             t1 = output[0];
//         }
//         else if (i===1) {
//             output = [t1, i];
//             t2 = output[1];
//         }
//         else {
//             t3 = t1+t2;
//             output.push(t3);
//             t1=t2;
//             t2=t3;
//         }
//         return output;
//     }




function fibonacciGenerator (n) {
    let output = [];
    if (n ===1) {
        output = [0];
    }
    else if (n ===2) {
        output =[0,1];
    }
    else {
        output = [0,1];

        for(let i=2; i<n; i++){
            output.push(output[output.length-2] + output[output.length-1]);
        }
    }
    return output;
}
output = fibonacciGenerator(50);
console.log(output);