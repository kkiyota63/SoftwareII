//jQueryの作法
$(function(){

  // イベントハンドラ
  var f=function(ev){
    $("#im_001").attr("src","cat1.jpg");
    $("#h2_001").text("猫の画像");
  }

  // イベント登録
  $("#bt_001").click(f);

});
