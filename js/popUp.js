//     ------------------      �Ϸ絿�� �����ʱ�  popupâ      ---------------------------

//setCookie(cname, cvalue, exdays)
//getCookie(cname)

///// PART 02
$(function(){
	// �ε��� ������ ��Ű������ ���� �ʾҴٸ� �˾�â ���̰�
	// �ƴϸ� �����

	if(  getCookie("subpop") !="done"){  $("#popWrap").show(); }
	else{  $("#popWrap").hide(); }
});

///// PART 01
function controlCookies(){
	
  console.log( $(".todayclose input:checked").length );   //=> 1 or 0  => üũ�ڽ� üũ�ϸ� length�� 1 üũ ���ϸ� 0

	if( $(".todayclose input:checked").length==1 ){  // üũ�ڽ� üũ
		setCookie("subpop","done", 1); }   // (��Ű�̸�, ��Ű��, �Ⱥ��� ��¥�ϼ�) ����

	$("#popWrap").hide();

	// üũ�ڽ��� üũ�� �Ǿ��ִٸ�
			// setCookies(��Ű�̸�, ��Ű��, �Ⱥ��� ��¥�ϼ�) ����
	// �ƴ϶�� ������ �����
}

//     ------------------      �Ϸ絿�� �����ʱ�  popupâ ����ڰ� �����̰� �����      ---------------------------

//  #popWrap  h3{ cursor:move; } �߰�
$(function(){
	//  $("#popWrap h3").mousedown(function(){ }).mouseup(function(){ });   �⺻ ����
	$("#popWrap h3").mousedown(function(e){  // ������
		// �������������� 	var e=e?e:window.event; // 3�� ������  �Ƚᵵ��

		//  0. ei9 ���� ����� ��� �ȉ����-> �����ڵ�,  selectstart�� body�� ����
		$("body").bind("selectstart", function(){ return false; });  
																	// �����ϱ⸸ �۵��ϰ� �ٸ������ false

		//	1. �ʱⰪ
		// �ʷϻ���(���̰�=Ŭ���� ���� ��ǥ- #popWrap�� x,y��ǥ) - Ŭ���� ��ġ�� �ʱⰪ
		$("#popWrap").data("clickX", e.pageX - $("#popWrap").offset().left )  // offset().left �� css�� position: absolute �� ����
							   .data("clickY", e.pageY - $("#popWrap").offset().top );  //  e.pageX�� Ŭ���� ���� ��ǥ


		//  2. �����϶� ���� (mousemove) ��ǥ�� �ٲ��ش�
		$(document).mousemove(function(e){ 
			$("#popWrap").css({
				"left":e.pageX - $("#popWrap").data("clickX")+"px",   // Ŭ���� ���� ��ǥ - �ʷϻ���(���̰�)
				"top":e.pageY - $("#popWrap").data("clickY")+"px"

			});
		
		
		}) ;
	
	}).mouseup(function(){  // ����
			//  3 �̺�Ʈ ���� ����
			//  4  selectstart �̺�Ʈ ����
			$("body").unbind("selectstart");
			$(document).unbind("mousemove") ;
		
		});
	
});