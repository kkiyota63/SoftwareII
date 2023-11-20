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

      //線の描画
      drawLine(x1,y1,x2,y2){
        this.ctx.beginPath();
        this.ctx.moveTo(x1,y1);
        this.ctx.lineTo(x2,y2);
        this.ctx.stroke();
      }
    }

  //インスタンスを生成
  var g = new Graphics();
  //矩形の描画
  g.drawRect(100, 100, 440, 280);

  //矩形内に斜め線を描画
  g.drawLine(540,100,100,380);
  
  g.drawRect(100,100,440,280);
  g.fillRect(200,200,240,80);
  g.drawEllipse(320,240,100,100);
  g.fillEllipse(320,240,80,80);
  
  for (var i=0;i<11;i++){
    //斜め線を描画
    g.drawLine(100,100+i*40,540,100+i*40);
  }
});
