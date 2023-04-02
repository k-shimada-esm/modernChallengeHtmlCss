/**
* フィルター検索に該当する書籍データを取得する
* @param {string} ジャンル（完全一致）
* @param {string} タイトル（部分一致）
* @return {配列} 書籍データ
*/
function readFromBookTableByFilter (genre, title) {
  Utilities.sleep(1000);

  if (!genre && !title) {
    return {
      books: bookData   // 書籍データ
    };
  }
}
