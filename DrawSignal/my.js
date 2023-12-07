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
    }
  
    var g=new Graphics();
  
    // 信号機を描く
    g.setDrawColor("#000000");     // 描画色は黒
    g.setFillColor("#ffcccc");     // 塗りつぶし色を薄いピンク
    g.fillRect(30,20,10,200);      // 棒を描く
    g.drawRect(30,20,10,200);      // 棒の枠を描く
    g.setFillColor("#ccffcc");     // 薄い緑
    g.fillRect(40,20,400,150);     // 信号の板
    g.drawRect(40,20,400,150);     // 周りの枠
    g.setFillColor("#000099");     // 青
    g.fillEllipse(120,100,50,50);  // 円を描く
    g.setFillColor("#999900");     // 黄色
    g.fillEllipse(240,100,50,50);  // 円を描く
    g.setFillColor("#ff6666");     // 赤
    g.fillEllipse(360,100,50,50);  // 円を描く
  });