const questionsAndAnswers = [
  { letter: "A" },
  { letter: "D" },
  { letter: "D" },
  { letter: "B" },
  { letter: "G" },
  { letter: "B" },
  { letter: "C" },
  { letter: "E" },
  { letter: "C" },
  { letter: "A" },
  { letter: "E" },
  { letter: "E" },
  { letter: "B" },
  { letter: "D" },
  { letter: "B" },
  { letter: "A" },
  { letter: "A" },
  { letter: "C" },
  { letter: "C" },
  { letter: "A" },
  { letter: "D" },
  { letter: "E" },
  { letter: "D" },
  { letter: "D" },
  { letter: "D" },
  { letter: "A" },
  { letter: "B" },
  { letter: "A" },
  { letter: "C" },
  { letter: "D" },
  { letter: "B" },
  { letter: "C" },
  { letter: "E" },
];


  const container = document.getElementById("qa-container");
  
  questionsAndAnswers.forEach((item) => {
    const questionEl = document.createElement("p");
    questionEl.className = "question";
    questionEl.textContent = item.question;
  
    const answerEl = document.createElement("p");
    answerEl.className = "answer";
    answerEl.textContent = item.answer;
    answerEl.innerHTML = `<strong>${item.letter}.</strong> ${item.answer}`;
  
    container.appendChild(questionEl);
    container.appendChild(answerEl);
  });
  
  document.getElementById("okButton").addEventListener("click", () => {
    window.location.href = "mobile.html"; // or another page
  });
  