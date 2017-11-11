function grade() {
	var student = document.getElementById('score').value;
	if(!student) {
		alert('输入为空，请重新输入0-100的分数');
		return;
	}
	if(isNaN(student)){
		alert('输入为非数字，请重新输入0-100的分数');
		return;
	}
	switch(true) {
		case student <=100 && student >= 90:
			alert('1等生');
			break;
		case student <90 && student >= 80:
			alert('2等生');
			break;
		case student <80 && student >= 70:
			alert('3等生');
			break;
		case student <70 && student >= 60:
			alert('4等生');
			break;
		case student < 60 && student>=0:
			alert('劝退');
			break;
		default:
			alert('输入分数有误，请输入0-100的分数');
	}
}