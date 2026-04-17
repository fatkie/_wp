function fakeGet(sql, params, callback) {
  // 模擬異步行為後回傳資料
  callback(null, { title: "Fake Title" });
}

fakeGet("SELECT * FROM posts", [], (err, row) => {
  console.log(row.title); // "Fake Title"
});