function calc() {
    var num1 = document.getElementById("num1").value;//第一个数字
    var operator = document.getElementById("operator").value;    //运算符
    var num2 = document.getElementById("num2").value;//第二个数字
    var result;                                              //结果初始化
    switch(operator) {
        case "+":
        	result = parseFloat(num1) + parseFloat(num2);
        	break;
        case "-":
        	result = parseFloat(num1) - parseFloat(num2);
        	break;
        case "*":
        	result = parseFloat(num1) * parseFloat(num2);
        	break;
        case "/":
        	if (num2!=0) {
        		result = parseFloat(num1) / parseFloat(num2);
        	} else{
        		alert('除数不能为0');
        		return;
        	}
        	break;
    }
    document.getElementById("result").value = result; 
}