<?php
header("Content-type:application/json;charset=utf-8");
require_once('db.php');//引用db.php里面的服务器的用户名，密码，端口号

if($link){
	$newsid=$_POST['newsid'];
	mysqli_query($link,"SET NAMES utf8");
	$sql="DELETE FROM `news` WHERE `news`.`id` = {$newsid}";
	
	mysqli_query($link,$sql);
	
	echo json_encode(array('删除状态'=>'成功'));
}
mysqli_close($link);
?>