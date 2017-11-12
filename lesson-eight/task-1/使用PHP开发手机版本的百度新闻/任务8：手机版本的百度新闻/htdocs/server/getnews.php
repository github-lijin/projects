<?php
header("Content-type:application/json;charset=utf-8");

require_once('db.php');//引用db.php里面的服务器的用户名，密码，端口号

if($link){
	//执行成功的过程
	
	if(@$_GET['newstype']){
		$newstype=$_GET['newstype'];
		$sql="SELECT * FROM `news` WHERE `newstype`='{$newstype}'";
	
		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);
		
		$senddata=array();
		
		while($row=mysqli_fetch_assoc($result)){
			array_push($senddata,array(
				'id' => $row['id'],
				'newstype' => $row['newstype'],
				'newstitle' => $row['newstitle'],
				'newsimg' => $row['newsimg'],
				'newstime' => $row['newstime'],
				'newssrc' => $row['newssrc'],
			));
		}
		echo json_encode($senddata);
	}else{
		$sql='SELECT * FROM news';
		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);
		
		$senddata=array();
		
		while($row=mysqli_fetch_assoc($result)){
			array_push($senddata,array(
				'id' => $row['id'],
				'newstype' => $row['newstype'],
				'newstitle' => $row['newstitle'],
				'newsimg' => $row['newsimg'],
				'newstime' => $row['newstime'],
				'newssrc' => $row['newssrc'],
			));
		}
		echo json_encode($senddata);
	}
}else{
	echo json_encode(array('success'=>'none'));
}
mysqli_close($link);
	
//			echo json_encode($arr);
	
?>