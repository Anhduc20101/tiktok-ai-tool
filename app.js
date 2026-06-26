async function generate() {
  let idea = document.getElementById("idea").value;
  let resultBox = document.getElementById("result");

  if (!idea) {
    alert("Nhập ý tưởng trước!");
    return;
  }

  resultBox.innerText = "⏳ AI đang tạo nội dung...";

  try {
    const res = await fetch("http://localhost:3000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ idea })
    });

    const data = await res.json();

    if (data.error) {
      resultBox.innerText = "❌ Lỗi: " + data.error;
      return;
    }

    resultBox.innerText = data.result;

  } catch (err) {
    resultBox.innerText = "❌ Không kết nối được server";
  }
}