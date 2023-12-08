$(function(){
  /*** Graphicsクラス ***/
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

  var g=new Graphics();
  
  // 信号機の状態を管理する変数
  var signalState = 'red'; // 初期状態は赤

  // 信号機の表示を更新する関数
  function updateSignal() {
    g.clear();

    // 信号機の基本的な描画
    g.setDrawColor("#000000"); // 描画色は黒
    g.setFillColor("#ffcccc"); // 塗りつぶし色を薄いピンク
    g.fillRect(30,20,10,200);  // 棒を描く
    g.drawRect(30,20,10,200);  // 棒の枠を描く
    g.setFillColor("#ccffcc"); // 薄い緑
    g.fillRect(40,20,400,150); // 信号の板
    g.drawRect(40,20,400,150); // 周りの枠

    // 信号の色（暗い状態）
    var darkRed = "#330000";
    var darkYellow = "#333300";
    var darkGreen = "#003300";

    // 赤、黄、青の信号を点灯または暗くする
    g.setFillColor(signalState === 'red' ? "#ff6666" : darkRed); // 赤
    g.fillEllipse(360, 100, 50, 50);
    g.setFillColor(signalState === 'yellow' ? "#999900" : darkYellow); // 黄色
    g.fillEllipse(240, 100, 50, 50);
    g.setFillColor(signalState === 'green' ? "#000099" : darkGreen); // 青
    g.fillEllipse(120, 100, 50, 50);
  }

  // 信号の状態を変更する関数
function changeSignal() {
  switch (signalState) {
    case 'red':
      signalState = 'green'; // 赤から青へ変更
      setTimeout(changeSignal, 5000); // 5秒後に次の状態へ
      break;
    case 'green':
      signalState = 'yellow'; // 青から黄色へ変更
      setTimeout(changeSignal, 1000); // 1秒後に次の状態へ
      break;
    case 'yellow':
      signalState = 'red'; // 黄色から赤へ変更
      setTimeout(changeSignal, 5000); // 5秒後に次の状態へ
      break;
  }
  updateSignal(); // 信号の表示を更新
}


  // 初期状態の信号を描画し、状態変更をスケジュール
  updateSignal();
  setTimeout(changeSignal, 5000); // 5秒後に最初の状態変更
});
