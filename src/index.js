// js の処理が開始されたことを確認するためのもの
alert("start js alert");
console.log("start js console");

// ロード時に処理が実行されるようにする
window.addEventListener("load", update);

// update処理が実行された回数を記録するためのもの
var cnt = 1;

// ロード時に実行する関数の定義
function update() {
  // update 関数の処理が実行されたことを確認するためのもの
  alert("start update alert, cnt = " + cnt);
  console.log("start update alert, cnt = " + cnt);

  // 回数を1つ増やす
  cnt = cnt + 1;

  // 繰り返し処理を実行するよの定義
  window.requestAnimationFrame(update);
}
