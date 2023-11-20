let i = 0;
let timerid;

function animate(icon) {
  i += 1;
  let angle = Math.PI / 180 * i;
  let x = Math.round(200 * Math.sin(angle) + 500);
  let y = Math.round(200 * Math.sin(angle) * Math.cos(angle) + 300);

  icon.style.visibility = 'hidden';
  icon.style.top = y + 'px';
  icon.style.left = x + 'px';
  icon.style.visibility = 'visible';

  // カウンターが360に達したら0にリセット
  if (i >= 360) {
    i = 0;
  }

  // アニメーションを続ける
  timerid = setTimeout(function() { animate(icon); }, 10);
}

// 初期化
window.onload = function() {
  var icon = document.getElementById('icon');
  animate(icon);
};
