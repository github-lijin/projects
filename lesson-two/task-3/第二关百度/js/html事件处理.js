function toSubmit() {
	var word = document.getElementById('word').value;
	if(word == null || word == "") { //如果输入为空
		document.getElementById('word').focus(); //如果没有输入点击提交光标就聚焦到输入框
		event.preventDefault(); //就不提交
	}
}