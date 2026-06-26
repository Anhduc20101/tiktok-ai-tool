const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🤖 AI FREE (mock thông minh)
function fakeAI(idea) {
  return `
🔥 CAPTION:
${idea} - Bí mật mà 90% người chưa biết!

🔥 HASHTAG:
#tiktok #viral #kiemtien #${idea.replace(/\s/g, "")}

🎬 SCRIPT (15-30s):
Hook: Bạn có biết về "${idea}" chưa?
Nội dung: Đây là cách đơn giản nhưng cực hiệu quả để bắt đầu...
CTA: Follow để xem thêm nhiều bí mật kiếm tiền!
`;
}

app.post("/generate", async (req, res) => {
  try {
    const idea = req.body.idea;

    const result = fakeAI(idea);

    res.json({
      result: result
    });

  } catch (err) {
    res.json({
      error: err.message
    });
  }
});

app.listen(3000, () => {
  console.log("🚀 FREE AI Server chạy tại http://localhost:3000");
});