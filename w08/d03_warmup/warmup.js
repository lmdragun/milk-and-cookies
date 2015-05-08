var numbers = [1, 2, 3, 5, 10, 9, 8, 9, 10, 11, 7];
var results = [];

for(var i=1; i < numbers.length; i++) {
    if((numbers[i-1]+numbers[i+1]) / 2 == numbers[i] && Math.abs(numbers[i]-numbers[i-1]) == 1) {
        results.push(i-1);
    }
}
console.log(results);


for(var i = 0; i < numbers.length; i++){
	if(numbers[i+1]-numbers[i] == 1){
		
	}
}
