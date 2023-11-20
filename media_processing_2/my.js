let t = 0;
let timerid;

function animate(icon) {
  t += 0.05; // アニメーションの速度を調整するための増分値

  let x = 16 * Math.pow(Math.sin(t), 3);
  let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

  // 座標の調整（原点を中心に移動し、スケーリング）
  x = x * 10 + 500; // スケーリングと移動
  y = -y * 10 + 300; // y軸が反転しているため、-yで補正

  icon.style.visibility = 'hidden';
  icon.style.top = y + 'px';
  icon.style.left = x + 'px';
  icon.style.visibility = 'visible';

  // アニメーションを続ける
  timerid = setTimeout(function() { animate(icon); }, 20);
}

// 初期化
window.onload = function() {
  var icon = document.getElementById('icon');
  animate(icon);
};
