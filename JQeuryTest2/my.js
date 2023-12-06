$(function() {
    var isDog = true; // 状態を追跡するフラグ

    // イベントハンドラ
    var f = function(ev) {
        if (isDog) {
            $("#im_001").attr("src", "cat1.jpg"); // 猫の画像に変更
            $("#h2_001").text("猫の画像");
            isDog = false; // フラグを猫の状態に更新
        } else {
            $("#im_001").attr("src", "dog1.jpg"); // 犬の画像に戻す
            $("#h2_001").text("犬の画像");
            isDog = true; // フラグを犬の状態に更新
        }
    }

    // イベント登録
    $("#bt_001").click(f);
});
