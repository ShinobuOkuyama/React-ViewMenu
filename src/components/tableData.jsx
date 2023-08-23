export const columns = [
  // { Header: "ID", accessor: "id" },
  // { Header: "商品", accessor: "product" },
  // { Header: "値段", accessor: "price" },
  // { Header: "在庫", accessor: "stock" },
  // { Header: "テスト", accessor: "test" }
];

export const data = [
  // {
  //   product: "りんご",
  //   price: "120円",
  //   stock: "130",
  //   test: "ほげ"
  // },
  // {
  //   product: "バナナ",
  //   price: "100円",
  //   stock: "200",
  //   test: "ほげほげ"
  // },
  // {
  //   product: "メロン",
  //   price: "3400円",
  //   stock: "2",
  //   test: "hogehoge"
  // }
];

export const setData = (id) => {
  // ここで、idに基づいたテーブルを拾う
  // 今はテストなので直接代入
  columns.splice(0, columns.length);
  columns.push(
    { Header: "商品", accessor: "product" },
    { Header: "値段", accessor: "price" },
    { Header: "在庫", accessor: "stock" },
    { Header: "テスト", accessor: "test" }
  );

  data.splice(0, columns.length);
  data.push(
    {
      product: "りんご",
      price: "120円",
      stock: "130",
      test: "ほげ"
    },
    {
      product: "バナナ",
      price: "100円",
      stock: "200",
      test: "ほげほげ"
    },
    {
      product: "メロン",
      price: "3400円",
      stock: "2",
      test: "hogehoge"
    }
  );

  const header = { id: id, title: "サンプルメニュー", update: "2023/08/23" };
  return header;
};
