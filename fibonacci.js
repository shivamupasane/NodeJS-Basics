function fibonacci (x) {
if (x === 1) {
    return [0, 1];
} else {
    var s = fibonacci(x-1);
    s.push(s[s.length - 1] + s[s.length - 2]);
return s;
    }
}
console.log(fibonacci(8).filter(function(d){
    if (d%2 == 0) {
        return d;
    }
}).reduce(function(sum, d) {
      sum += d;
      return sum;  
    }
));