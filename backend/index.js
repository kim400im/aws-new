const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://stai.kr' }));

app.post('/auth/login', (req, res) => {
  const { userid, password } = req.body;

  if(userid === 'stai' && password === 'ara') {
    res.status(200).json({ message: "로그인 성공" });
  } else {
    res.status(401).json({ message: "로그인 실패" });
  }
});

app.listen(8008, () => console.log("백엔드 실행 중 (8008 포트)"));
