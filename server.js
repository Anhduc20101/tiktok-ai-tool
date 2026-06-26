const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 AI FAKE (ổn định để deploy trước)
function generateContent(idea) {
  return `
🔥 CAPTION:
${idea} - bí mật ít người biết!

🚀 HASHTAG:
#tiktok #viral #kiemtien #${idea.replace(/\s/g, "")}

🎬 SCRIPT:
👉 Hook: Bạn có biết "${idea}" không?
👉 Nội dung: Đây là cách đơn giản để bắt đầu...
👉 CTA: Follow để xem thêm nội dung hay!
`;
}

app.post("/generate", (req, res) => {
  try {
    const { idea } = req.body;

    if (!idea) {
      return res.json({ error: "Thiếu idea" });
    }

    const result = generateContent(idea);

    res.json({ result });

  } catch (err) {
    res.json({ error: err.message });
  }
});

// ⚠️ QUAN TRỌNG CHO RAILWAY
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Server running on port " + PORT);
});