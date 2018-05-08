//Author : Yur5n
//Author's QQ : 860623534
//Version ：1.1
//Date : 2018-5-08

console.log("成功运行自动刷课智慧树版By_Yur5n");
var _it = null;
start();
closeQ();
function closeQuestion(){
  clearInterval(_it);
  var t = $(".popboxes_close.tmui_txt_hidd");
  if( t.length != 0 ){
    t.click();
  }
  if( $(".popboxes_close.tmui_txt_hidd").length != 0 ){
    closeQuestion();
  }else{
    start();
  }
}
function start(){
  _it = setInterval(function(){
    console.log("【提示】刷课程序运行中");
    // 关闭弹题
    closeQuestion()
    // 判断清晰度调整为高清
    if(!$(".line1bq").hasClass("active")){
      $(".line1bq").click();
      console.log("【Yur5n提示】刷课程序已将清晰度调整为“标清”");
    }
    // 自动静音
    if(!$(".volumeBox").hasClass("volumeNone")){
      $(".volumeIcon").click();
      console.log("【Yur5n提示】刷课程序已将视频静音");
    }
    // 1.5倍速
	//  $(".speedTab15").click();   需要倍速自己取消注释
    // 下一节课
    if($("div.bigPlayButton").attr("style") != "display: none;" && $(".popboxes_close.tmui_txt_hidd").length === 0 ){
      $("#nextBtn").click();
    }
  },5000);
}
function closeQ(){
  setInterval(function(){
    $(".popboxes_close.tmui_txt_hidd").click();
  },500);
}
