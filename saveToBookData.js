/**
 * 書籍テーブルに書籍データを登録・更新する
 * @param  {boolean} 登録はtrue、更新はfalse
 * @param  書籍情報
 * @return 書籍管理番号
 */
function updateBookTable (isInsert, bookInfo) {
  let bookNo = 0; // 返却する書籍番号

  const savedIndex = bookData.findIndex( ({bookNo}) => (bookNo == bookInfo.bookNo) );
  console.log(savedIndex)
  if (savedIndex < 0) {
    savedBookNo += 1;
    const newBookInfo = {
      bookNo: savedBookNo,
      title: bookInfo.title,
      genre: bookInfo.genre,
      purchaseDate: bookInfo.purchaseDate,
      purchasePerson: bookInfo.purchasePerson,
    }
    bookData.push(newBookInfo);
    bookNo = savedBookNo;
  } else {
    bookData[savedIndex].title = bookInfo.title;
    bookData[savedIndex].genre = bookInfo.genre;
    bookData[savedIndex].purchaseDate = bookInfo.purchaseDate;
    bookData[savedIndex].purchasePerson = bookInfo.purchasePerson;
    bookNo = bookInfo.bookNo;
  }

  return bookNo; // 書籍管理番号
}
