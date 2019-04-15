// function sum(){
//     let arr = Array.from(arguments);
//     let total = 0;
//     arr.forEach( (num) => {
//         total += num;
//     });
//     return total;
// }

function sum(...args){
    let total = 0;
    args.forEach( (num) => {
        total += num;
    })
    return total;
}


// console.log(sum(1, 2, 3, 4) === 10)
// console.log(sum(1, 2, 3, 4, 5) === 15)


// Function.prototype.myBind = function() {
//     let args = Array.from(arguments);
//     let bindArgs = args.slice(1);
//     let context = args[0];

//     let that = this;

//     return function() { 
//         const callArgs = Array.from(arguments)
//         that.apply(context, bindArgs.concat(callArgs));
//     }
// }


Function.prototype.myBind = function (context, ...bindArgs) {
    let that = this;

    return function (...callArgs) {
       return that.apply(context, bindArgs.concat(callArgs));
    }
}

function curriedSum(numArgs){
    const numbers = [];
    

    function _curriedSum(...callArgs){
        callArgs.forEach((num) => {
            numbers.push(num);
        })
        if (numbers.length === numArgs){
            sum = 0;
            numbers.forEach( (num) => {
                sum += num;
            });
            return sum;
        } else {
            return _curriedSum;
        }
    }
        return _curriedSum();
}

Function.prototype.curry = function(numArgs) { 
    const args = []; 
    let that = this 

    function _curry(arg) {
        args.push(arg);
        if (args.length === numArgs){
            return that.apply(null, args); //it just works
        } else {
            return _curry;
        }
    }
    return _curry;
}

// const some = curriedSum(4);
// console.log(some(5)(30)(20)(1)); // => 56

// let summation = (array) => {
//     return 'Ya did it boi'
// }  

// const addThis = summation.curry(4);
// console.log(addThis(5));
// console.log(addThis(4));
// console.log(addThis(6));
// console.log(addThis(10)); // => 25