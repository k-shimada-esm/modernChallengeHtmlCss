/**
 * 書籍テーブルから書籍データを削除する
 * @param  書籍管理番号
 */
function removeFromBookData (bookNo) {
  bookData = bookData.filter( (data) => {
      return (data.bookNo != bookNo)
  } );
}
