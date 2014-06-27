var args = process.argv;

var sum = args.slice(2).reduce(function(memo, curr) {
    return memo + Number(curr);
}, 0);

console.log(sum);
