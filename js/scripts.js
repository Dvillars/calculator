function add(num1, num2) {
	var x = num1 + num2;
	return x;
};

function sub(num1, num2) {
	var x = num1 - num2;
	return x;
};

function multi(num1, num2) {
	var x = num1 * num2;
	return x;
};

function div(num1, num2) {
	var x = num1 / num2;
	return x;
};

function ask(){
	var num1 = parseInt(prompt('Enter a number:'));
  var num2 = parseInt(prompt('Enter another number:'));
  alert(add(num1, num2));
  alert(sub(num1, num2));
  alert(multi(num1, num2));
  alert(div(num1, num2));
};

ask();
