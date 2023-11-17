//jQueryの作法
$(function(){
  //Graphicsクラス
  class Graphics {
    //コンストラクタ
    constructor() {
      var can = $("#can")
      this.ctx = can[0].getContext("2d");
    }

      //矩形の描画  
      drawRect(x,y,w,h){
        this.ctx.strokeRect(x, y, w, h);
      }
      fillRect(x,y,w,h){
        this.ctx.fillRect(x, y, w, h);
      }
      //楕円の描画
      drawEllipse(x,y,w,h){
        this.ctx.beginPath();
        this.ctx.ellipse(x, y, w, h, Math.PI / 4, 0, 2 * Math.PI);
        this.ctx.stroke();
      }

      //楕円の塗りつぶし
      fillEllipse(x,y,w,h){
        this.ctx.beginPath();
        this.ctx.ellipse(x, y, w, h, Math.PI / 4, 0, 2 * Math.PI);
        this.ctx.fill();
      }
    }

  //インスタンスを生成
  var g = new Graphics();
  //矩形の描画
  g.drawRect(100, 100, 440, 280);
  //for文で矩形の中に円を描画
  for (var j = 0; j < 7; j++) {
    for (var i = 0; i < 11; i++) {
      g.drawEllipse(120 + i * 40, 120+j*40, 20, 20);
    }
  }
});
