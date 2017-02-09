//     ------------------      하루동안 열지않기  popup창      ---------------------------

//setCookie(cname, cvalue, exdays)
//getCookie(cname)

///// PART 02
$(function(){
	// 로딩을 했을때 쿠키설정이 되지 않았다면 팝업창 보이게
	// 아니면 숨기기

	if(  getCookie("subpop") !="done"){  $("#popWrap").show(); }
	else{  $("#popWrap").hide(); }
});

///// PART 01
function controlCookies(){
	
  console.log( $(".todayclose input:checked").length );   //=> 1 or 0  => 체크박스 체크하면 length가 1 체크 안하면 0

	if( $(".todayclose input:checked").length==1 ){  // 체크박스 체크
		setCookie("subpop","done", 1); }   // (쿠키이름, 쿠키값, 안보일 날짜일수) 설정

	$("#popWrap").hide();

	// 체크박스가 체크가 되어있다면
			// setCookies(쿠키이름, 쿠키값, 안보일 날짜일수) 설정
	// 아니라면 닫히게 만들기
}

//     ------------------      하루동안 열지않기  popup창 사용자가 움직이게 만들기      ---------------------------

//  #popWrap  h3{ cursor:move; } 추가
$(function(){
	//  $("#popWrap h3").mousedown(function(){ }).mouseup(function(){ });   기본 구조
	$("#popWrap h3").mousedown(function(e){  // 누를때
		// 제이쿼리에서는 	var e=e?e:window.event; // 3항 연산자  안써도됨

		//  0. ei9 에서 기능이 됬다 안됬다함-> 방지코드,  selectstart를 body에 연결
		$("body").bind("selectstart", function(){ return false; });  
																	// 선택하기만 작동하고 다른기능은 false

		//	1. 초기값
		// 초록색상(차이값=클릭한 곳의 좌표- #popWrap의 x,y좌표) - 클릭한 위치의 초기값
		$("#popWrap").data("clickX", e.pageX - $("#popWrap").offset().left )  // offset().left 는 css의 position: absolute 값 리턴
							   .data("clickY", e.pageY - $("#popWrap").offset().top );  //  e.pageX는 클릭한 곳의 좌표


		//  2. 움직일때 마다 (mousemove) 좌표값 바꿔준다
		$(document).mousemove(function(e){ 
			$("#popWrap").css({
				"left":e.pageX - $("#popWrap").data("clickX")+"px",   // 클릭한 곳의 좌표 - 초록색상값(차이값)
				"top":e.pageY - $("#popWrap").data("clickY")+"px"

			});
		
		
		}) ;
	
	}).mouseup(function(){  // 땔때
			//  3 이벤트 연결 끊기
			//  4  selectstart 이벤트 끊기
			$("body").unbind("selectstart");
			$(document).unbind("mousemove") ;
		
		});
	
});