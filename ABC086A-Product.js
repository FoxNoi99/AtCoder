/*
https://atcoder.jp/contests/abs/tasks/abc086_a
*/

'use strict'
function main(input) {
	input = input.split(" "); //標準入力はa,bの間に半角スペース
	const a = parseInt(input[0]);
	const b = parseInt(input[1]);
    
    if (a * b % 2 === 0) { //余り0なら偶数
    console.log("Even");  
}   else {
    console.log("Odd");
}
}
main(require('fs').readFileSync('/dev/stdin', 'utf8')); 
