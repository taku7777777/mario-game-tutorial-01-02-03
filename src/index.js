// js の処理が開始されたことを確認するためのもの
alert(`start js alert`);
console.log(`start js console`);

// ロード時に処理が実行されるようにする
window.addEventListener("load", update);

// ロード時に実行する関数の定義
function update() {
  // update 関数の処理が実行されたことを確認するためのもの
  alert(`start update alert`);
  console.log(`start update console`);

  // 繰り返し処理を実行するよの定義
  requestAnimationFrame(update);
}
