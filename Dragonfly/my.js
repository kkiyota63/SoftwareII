$(function(){
  
  /*** Graphicsクラス
   ***/
  class Graphics {
  
    // 生成
    constructor(){
      var can=$("#can");
      this.ctx=can[0].getContext("2d");
    }
    
    // 矩形描画
    drawRect(x,y,w,h){
      this.ctx.strokeRect(x,y,w,h);
    }
    fillRect(x,y,w,h){
      this.ctx.fillRect(x,y,w,h);
    }
    
    // 楕円描画
    drawEllipse(x,y,w,h){
      this.ctx.beginPath();
      this.ctx.ellipse(x,y,w,h,0,0,2*Math.PI);
      this.ctx.stroke();
    }
    fillEllipse(x,y,w,h){
      this.ctx.beginPath();
      this.ctx.ellipse(x,y,w,h,0,0,2*Math.PI);
      this.ctx.fill();
    }
    
    // 線分描画
    drawLine(x1,y1,x2,y2){
      this.ctx.beginPath();
      this.ctx.moveTo(x1,y1);
      this.ctx.lineTo(x2,y2);
      this.ctx.stroke();
    }
    
    // 描画色の設定
    setDrawColor(c){
      this.ctx.strokeStyle=c;
    }
    setFillColor(c){
      this.ctx.fillStyle=c;
    }
    
    // クリア
    clear(){
      this.ctx.clearRect(0,0,640,480);
    }
  }
  

  class Dragonfly
  {
    constructor(x,y){
      this.x=320;
      this.y=240;
    }
    
    //描画
    draw(g){
      //楕円を描画
      g.setFillColor("orange");
      g.drawEllipse(this.x,this.y,5,50);
      g.fillEllipse(this.x,this.y,5,50);

      //楕円を描画
      g.setFillColor("blue");
      g.drawEllipse(this.x+40,this.y,30,10);
      g.fillEllipse(this.x+40,this.y,30,10);

      //楕円を描画
      g.setFillColor("blue");
      g.drawEllipse(this.x+40,this.y-20,30,10);
      g.fillEllipse(this.x+40,this.y-20,30,10);

      //楕円を描画
      g.setFillColor("blue");
      g.drawEllipse(this.x-40,this.y,30,10);
      g.fillEllipse(this.x-40,this.y,30,10);

      //楕円を描画
      g.setFillColor("blue");
      g.drawEllipse(this.x-40,this.y-20,30,10);
      g.fillEllipse(this.x-40,this.y-20,30,10);

      //目を描画
      g.setFillColor("black");
      g.drawEllipse(this.x+15,this.y-60,10,10);
      g.fillEllipse(this.x+15,this.y-60,10,10);

      //目を描画
      g.setFillColor("black");
      g.drawEllipse(this.x-15,this.y-60,10,10);
      g.fillEllipse(this.x-15,this.y-60,10,10);

    }

  }

  var graphics = new Graphics();
  var dragonfly = new Dragonfly(320, 240); // トンボの初期位置を指定

  dragonfly.draw(graphics); // トンボを描画
});
