$(function() {
  // キーボードイベントハンドラ
  var changeImageByKey = function(event) {
      switch(event.key) {
          case 'd':
              $("#im_001").attr("src", "dog1.jpg"); // 犬の画像に変更
              break;
          case 'c':
              $("#im_001").attr("src", "cat1.jpg"); // 猫の画像に変更
              break;
          case 'p':
              $("#im_001").attr("src", "panda1.jpg"); // パンダの画像に変更
              break;
      }
  };

  // 画像がクリックされたときのイベントハンドラ
  $("#im_001").click(function() {
      $(this).attr('tabindex', '0').focus(); // tabindexを設定してフォーカスを当てる
  }).keydown(changeImageByKey); // キーダウンイベントにハンドラを登録
});
