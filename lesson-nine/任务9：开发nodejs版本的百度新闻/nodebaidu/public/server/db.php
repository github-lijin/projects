<?php
	
	header("Content-type:application/json;charset=utf-8");
	//getnews.php和insert.php都引用db.php里面的端口号，以后要改端口号，用户名，密码就在这里改就行了
	$link=mysqli_connect('localhost','root','','baidunews',3306);

?>