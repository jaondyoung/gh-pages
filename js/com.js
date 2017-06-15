$(document).ready(function(){

//功能区
var sflag=0
$(".stitle").click(function(){
  var cid=$(this).attr("id").replace("t","");
  if (sflag!=cid){
  $(".st span").removeClass("on");
  $(this).addClass("on");
  $(".scont").slideUp("100");
  $("#c"+cid).slideDown("300");
  sflag=cid
  };
});
$(".wttitle span").click(function(){
  var cid=$(this).attr("id").replace("t","");
  if (sflag!=cid){
  $(".wttitle span").removeClass("on");
  $(this).addClass("on");
  $(".wtcont").slideUp("100");
  $("#c"+cid).slideDown("300");
  sflag=cid
  };
});
$(document).click(function(){
 $(".scont").slideUp("100");
 $(".wtcont").slideUp("100");
 sflag=0;
 $(".st span").removeClass("on");
 $(".wttitle span").removeClass("on");
});
$('.stitle,.scont,.wttitle span,.wtcont').click(function(event){
event.stopPropagation();
});

//ip-guard
$(".ipmt").click(function(){
  $(".ipmt").removeClass("ipon");
  $(this).addClass("ipon");
  var iid=$(this).attr("id").replace("i","");
  $("#ipc1,#ipc2").css({"display":"none"});
  $("#ipc"+iid).css({"display":"block"});
});
$(".jmt").click(function(){
  var jid=$(this).attr("id").replace("jmt","");
  $(".jmt").removeClass("ton");
  $(this).addClass("ton");
  $(".jmc").slideUp("100");
  $("#jmc"+jid).slideDown("300");
});

//cpbar
$(".cpb").bind("mouseenter",function(){
  cpn=$(this).attr("id");
  maptimer=setTimeout(function(){
	$("#"+cpn).find("p.p1").fadeOut();
	$("#"+cpn).find("p.p2").fadeIn();
	}, 100);
});
$(".cpb").bind("mouseleave",function(){
  clearTimeout(maptimer);
  $(this).find("p.p1").fadeIn();
  $(this).find("p.p2").fadeOut();
});

$(".verifycode").click(function(){
  $(this).attr("src", $(this).attr("src")); //重新生成验证码		  
});	

//咨询窗
$('#qqb,.qqbox').bind("mouseenter",function(){
	$(".qqbox").css({"display":"block"});
	$(".mabox").css({"display":"none"});
});
$('#mab,.mabox').bind("mouseenter",function(){
	$(".mabox").css({"display":"block"});
	$(".qqbox").css({"display":"none"});
});
$('#syb,#tpb').bind("mouseenter",function(){
	$(".mabox").css({"display":"none"});
	$(".qqbox").css({"display":"none"});
});
$("#rightDiv").bind("mouseleave",function(){
	$(".qqbox").css({"display":"none"});
	$(".mabox").css({"display":"none"});
});

});