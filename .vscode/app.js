let words = [];

function showRandomWord() {
  if (words.length === 0) return;

  const randomIndex = Math.floor(Math.random() * words.length);
  const word = words[randomIndex];

  document.getElementById("word").textContent = word.word;
  document.getElementById("reading").textContent = word.reading;
  document.getElementById("meaning").textContent = word.meaning;
}

// JSON 파일 로드
fetch("words.json")
  .then((response) => response.json())
  .then((data) => {
    words = data;
    showRandomWord();
  })
  .catch((error) => {
    console.error("단어를 불러오는 중 오류 발생:", error);
  });
