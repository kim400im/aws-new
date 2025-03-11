const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Frontend 서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
