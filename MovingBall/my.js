$(function(){

  /*** Graphicsクラス ***/
  class Graphics {
    constructor(){
      var can = $("#can");
      this.ctx = can[0].getContext("2d");
    }
    
    // 矩形描画（使用しないため省略）

    // 楕円描画
    drawEllipse(x, y, w, h){
      this.ctx.beginPath();
      this.ctx.ellipse(x, y, w, h, 0, 0, 2 * Math.PI);
      this.ctx.stroke();
    }
    fillEllipse(x, y, w, h){
      this.ctx.beginPath();
      this.ctx.ellipse(x, y, w, h, 0, 0, 2 * Math.PI);
      this.ctx.fill();
    }

    // 描画色の設定
    setDrawColor(c){
      this.ctx.strokeStyle = c;
    }
    setFillColor(c){
      this.ctx.fillStyle = c;
    }
    
    // クリア
    clear(){
      this.ctx.clearRect(0, 0, 640, 480);
    }
  }

  // 変数準備
  var g = new Graphics();
  var balls = [
    {x: 320, y: 240, vx: 10, vy: 10, color: 'red'},
    {x: 100, y: 100, vx: 15, vy: 15, color: 'yellow'},
    {x: 540, y: 380, vx: 5, vy: 5, color: 'blue'}
  ];
  
  // 実行
  function exec(){
    g.clear();
    balls.forEach(ball => {
      ball.x += ball.vx; // ボールを移動
      ball.y += ball.vy;
      if (ball.x < 20 || ball.x > 620) ball.vx = -ball.vx; // 端に当たったら跳ね返る
      if (ball.y < 20 || ball.y > 460) ball.vy = -ball.vy;
      g.setFillColor(ball.color);
      g.fillEllipse(ball.x, ball.y, 20, 20); // 描画
    });
  }
  
  // 定期的実行
  setInterval(exec, 10);  // 10[ms]毎にexecを実行する
});
