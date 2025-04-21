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

questionsAndAnswers.forEach((item, index) => {
  // Create a wrapper div for each question and answer pair
  const questionWrapper = document.createElement("div");
  questionWrapper.className = "question-wrapper";  // Add a class for styling
  
  // Create the image element for the question (q1.png, q2.png, etc.)
  const questionImage = document.createElement("img");
  questionImage.src = `/assets/q${index + 1}.webp`; // Adjust path if necessary
  questionImage.alt = `Question ${index + 1}`;
  questionImage.className = "question-image";  // Add a class for styling

  // Create the answer element
  const answerElement = document.createElement("p");
  answerElement.className = "answer";
  answerElement.innerHTML = `<strong>${item.letter}</strong>`; // Only the letter

  // Append image and answer to the wrapper div
  questionWrapper.appendChild(questionImage);
  questionWrapper.appendChild(answerElement);

  // Append the wrapper div to the container
  container.appendChild(questionWrapper);
});

document.getElementById("okButton").addEventListener("click", () => {
  window.location.href = "index.html"; // or another page
});
