var factors = function (num) {
    var factorsNum = [];
    for(var i = 0; i <= num; i++) {
        if (num % i === 0) {
            factorsNum.push(i);
        }
    }
    console.log("shivam", factorsNum);
    return factorsNum;
}
var isPrime = function(num){
    console.log(factors(num));
if(factors(num)[0] === 1 && factors(num)[1] === num && num !== 1){
    return true;
} else {
    return false;
}
}
function largestPrimeFactor(num) {
    var s = factors(num).filter(function(d){if(isPrime(d)){ return d}});
    var result = s.sort()[s.length - 1]
    return result;
}
console.log(largestPrimeFactor(15));