$(function() {
  var isDog = true; // 現在の画像が犬かどうかを追跡
  var originalSrc = "dog1.jpg"; // 元の画像のソース

  // ボタンのクリックイベントハンドラ
  var toggleImage = function() {
      if (isDog) {
          $("#im_001").attr("src", "cat1.jpg"); // 猫の画像に変更
          $("#h2_001").text("猫の画像");
          originalSrc = "cat1.jpg"; // 元の画像ソースを更新
          isDog = false;
      } else {
          $("#im_001").attr("src", "dog1.jpg"); // 犬の画像に戻す
          $("#h2_001").text("犬の画像");
          originalSrc = "dog1.jpg"; // 元の画像ソースを更新
          isDog = true;
      }
  }

  // 画像にマウスが乗ったときのイベントハンドラ
  var showPanda = function() {
      $("#im_001").attr("src", "panda1.jpg"); // パンダの画像に変更
      $("#h2_001").text("パンダの画像");
  }

  // 画像からマウスが離れたときのイベントハンドラ
  var showOriginal = function() {
      $("#im_001").attr("src", originalSrc); // 元の画像に戻す
  }

  // イベントの登録
  $("#bt_001").click(toggleImage);
  $("#im_001").mouseenter(showPanda).mouseleave(showOriginal);
});
