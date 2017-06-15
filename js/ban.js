$(document).ready(function(){

var n=-1
var cn=-1
var flag=0
pnum=$(".banb").children("span").length;
picIn();
function picIn(){
  if (window.ptime){clearTimeout(ptime);}
  if (flag>0){ $("#f"+flag).fadeOut(200);}
  if (n>=0){flag=n+1;n=-1}
  else if (cn>-1){flag=cn;cn=-1}
  else{flag+=1}
  if (flag>pnum){flag=1}
  $(".banb span").removeClass("on");
  $(".banb span").eq(flag-1).addClass("on");
  //$("#f"+flag).css({"display":"block"});
  $("#f"+flag).delay(100).fadeIn(300);
  ptime=setTimeout(picIn,6000);
}

$(".banb span").click(function(){
  n=$(this).index()
  picIn();
});
$("#aro-left").click(function(){
  cn=flag-1
  if (cn==0){cn=pnum}
  picIn();
});
$("#aro-right").click(function(){
  picIn();
});

$(".banbox").bind("mouseenter",function(){
  $("#aro-left").fadeIn();
  $("#aro-right").fadeIn();
});
$(".banbox").bind("mouseleave",function(){
  $("#aro-left").fadeOut();
  $("#aro-right").fadeOut();
});

$(".smtb span").bind("mouseenter",function(){
  smn=$(this).index();
  $(".smtb span").removeClass("on");
  $(this).addClass("on");
  $(".smttxt p").css("display","none");
  $(".smttxt p").eq(smn).css("display","block");
});


});
