function add(num1, num2) {
	var x = num1 + num2;
	return x;
};

function ask(){
	var num1 = parseInt(prompt('Enter a number:'));
  var num2 = parseInt(prompt('Enter another number:'));
  alert(add(num1, num2));
};

ask();
