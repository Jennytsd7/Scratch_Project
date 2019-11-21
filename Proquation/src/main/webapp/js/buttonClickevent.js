/** @author Janani Anand, Raghavan Sreenivasa
 *  version 1.3
 *  This file handles all the exception cases for evaluation logic 
 *  i.e. Division  by 0, multiple operators, invalid parenthesis, etc.
 */

var result;
var evalStr = '';
var buttons = document.querySelectorAll(".btn");

function updateEvalStr(str) {
	evalStr = str;
}

function updateStr(str) {
	evalStr += str;
	result = evaluate(evalStr);
	displayResult(evalStr);
}

function removeLastfromEvalStr() {
	if(evalStr.length > 0) {
		evalStr = evalStr.slice(0, -1);
	}
	result = evaluate(evalStr);
	
	displayResult(evalStr);
}

function displayResult(strEval){
	let checkValid = checkValidExpression(strEval);
	let resultContainer = document.querySelector('.result_content');
	
	if(checkValid == 'valid') {
		if(strEval == "")
			resultContainer.textContent = '';
		else if(result != 'Infinity' && !isNaN(result))
			resultContainer.textContent = result;
		else if(isNaN(result))
			resultContainer.textContent = "Not a valid expression";
		else
			resultContainer.textContent = 'Division by 0 not allowed';
	}
	
	else
		resultContainer.textContent = 'Not a valid expression';

}

function checkValidExpression(strCheck){
	let lastElement = strCheck[strCheck.length - 1];
	if(lastElement == '+' || lastElement == '-' || lastElement == '*' || lastElement == '/' || lastElement =='(') 
		return 'invalid';
	else
		return 'valid';
}