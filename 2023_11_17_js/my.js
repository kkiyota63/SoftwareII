//jQueryの作法
$(function(){
  //キャンバスの要素を取得
  var can = $("#can")
  //コンテキストを取得
  var ctx = can[0].getContext("2d");

  //矩形の描画
  ctx.strokeRect(100, 100, 440, 280);

  //for文で矩形の中に円を描画
  // for (var j = 0; j < 7; j++) {
  //   for (var i = 0; i < 11; i++) {
  //     ctx.beginPath();
  //     ctx.ellipse(120 + i * 40, 120+j*40, 20, 20, Math.PI / 4, 0, 2 * Math.PI);
  //     ctx.stroke();
  //   }
  //}
  //for文で矩形の中に円を塗りつぶし
  for (var j = 0; j < 7; j++) {
    for (var i = 0; i < 11; i++) {
      ctx.beginPath();
      ctx.ellipse(120 + i * 40, 120+j*40, 20, 20, Math.PI / 4, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  });
