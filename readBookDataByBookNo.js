/**
 * フィルター検索に該当する書籍データを取得する
 * @param {string} ジャンル（完全一致）
 * @param {string} タイトル（部分一致）
 * @return {配列} 書籍データ
 */
function readFromBookTableByFilter (genre, title) {
    const bookData = [];

    let bookInfo = {};
    bookInfo = {
        bookNo: '1',
        title: '経済のニュースが面白いほどわかる本〈日本経済編〉',
        genre: '経済学',
        purchaseDate: '2021-01-12',
        purchasePerson: '田中一郎',
   };
   bookData.push(bookInfo);
   bookInfo = {
        bookNo: '2',
        title: '経済ってそういうことだったのか会議',
        genre: '経済学',
        purchaseDate: '2021-02-13',
        purchasePerson: '山田太郎',
   };
   bookData.push(bookInfo);
   bookInfo = {
        bookNo: '3',
        title: '上司が「鬼」とならねば、部下は動かず',
        genre: '経営学',
        purchaseDate: '2021-03-14',
        purchasePerson: '田中一郎',
   };
   bookData.push(bookInfo);
   bookInfo = {
        bookNo: '4',
        title: 'インターネットのミニ株取引から始めて 株で1億円作る!',
        genre: '銀行・金融業',
        purchaseDate: '2021-01-12',
        purchasePerson: '田中一郎',
   };
   bookData.push(bookInfo);
   bookInfo = {
        bookNo: '5',
        title: '仕事ができる人できない人',
        genre: 'マネジメント',
        purchaseDate: '2021-05-16',
        purchasePerson: '山田太郎',
   };
   bookData.push(bookInfo);
   bookInfo = {
        bookNo: '6',
        title: 'ネコでもわかる株入門の入門',
        genre: '銀行・金融業',
        purchaseDate: '2021-07-18',
        purchasePerson: '山田太郎',
   };
   bookData.push(bookInfo);
   bookInfo = {
        bookNo: '7',
        title: '株はこうして買いなさい',
        genre: '銀行・金融業',
        purchaseDate: '2021-09-20',
        purchasePerson: '田中一郎',
   };
   bookData.push(bookInfo);
   bookInfo = {
        bookNo: '8',
        title: 'プロフェッショナルの条件',
        genre: 'マネジメント',
        purchaseDate: '2021-10-22',
        purchasePerson: '田中一郎',
   };
   bookData.push(bookInfo);
   bookInfo = {
        bookNo: '9',
        title: 'ドットコム・ショック新旧交代の経済学',
        genre: '経済学',
        purchaseDate: '2021-11-24',
        purchasePerson: '田中一郎',
   };
   bookData.push(bookInfo);
   bookInfo = {
        bookNo: '10',
        title: '「株」「投資信託」「外貨預金」がわかる基礎の基礎講座',
        genre: '銀行・金融業',
        purchaseDate: '2022-01-30',
        purchasePerson: '山田太郎',
   };
   bookData.push(bookInfo);
   Utilities.sleep(1000);

    return {
        books: bookData   // 書籍データ
    }
}
