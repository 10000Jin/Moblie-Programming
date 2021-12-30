// 버튼으로 사용될 이미지가 눌릴 때 
// 네비게이션 바의 disaplay 속성이 none이면 block으로 block이면 none으로 변경.
var bDisplay = true;
function doDisplay(){
	var con = document.getElementById("header");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
}