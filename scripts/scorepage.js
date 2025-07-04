const questions = [
  {
      options: [
          "A) BELIEVES IN HIM", // Question 1
          "B) IS A CHRISTIAN", 
          "C) KEEPS THE COMMANDMENTS", 
          "D) IS A GOOD PERSON", 
          "E) ACCEPTS HIM AS THEIR LORD AND SAVIOR", 
          "F) DOES NOT CONTRIBUTE TO CLIMATE CHANGE"
      ],
      correctAnswer: "A) BELIEVES IN HIM",
      points: 3.5
  },
  {
      options: [
          "A) THOSE WHO ACCEPT ME AS THEIR LORD AND SAVIOR.", // Question 2
          "B) THOSE WHO ARE TOLERANT OF DIFFERENT RACES, SEXES, AND RELIGIONS.", 
          "C) THOSE WHO ARE NOT EVIL.", 
          "D) THE ONE WHO DOES THE WILL OF MY FATHER WHO IS IN HEAVEN.", 
          "E) JESUS DID NOT SAY THIS AND EVERYBODY WILL GO TO HEAVEN BECAUSE THERE IS NO SUCH THING AS HELL."
      ],
      correctAnswer: "D) THE ONE WHO DOES THE WILL OF MY FATHER WHO IS IN HEAVEN.",
      points: 3.5
  },
  {
      options: [
          "A) \"THAT IS FALSE,\" JESUS REPLIED. \"HOW IS IT YOU ARE CONSIDERED A SCHOLAR?\"", // Question 3
          "B) \"THAT IS FALSE,\" JESUS REPLIED. \"THIS TEACHING IS OF THE PHARISEES BUT NOT OF GOD.\"",
          "C) \"THAT WAS TRUE WITH THE OLD COVENANT [BASED UPON LAW],\" JESUS REPLIED. \"IN THE NEW COVENANT NOW UPON YOU, GRACE IS THE PATH TO ETERNAL LIFE.\"",
          "D) \"YOU HAVE ANSWERED CORRECTLY,\" JESUS REPLIED. \"DO THIS AND YOU WILL LIVE.\""
      ],
      correctAnswer: "D) \"YOU HAVE ANSWERED CORRECTLY,\" JESUS REPLIED. \"DO THIS AND YOU WILL LIVE.\"",
      points: 3
      
  },
  {
      options: [
          "A) CONFESS WITH THEY LIPS/DOETH NOT", // Question 4
          "B) BELIEVETH AND IS BAPTIZED/BELIEVETH NOT", 
          "C) BE NOT SEXIST/BE MISOGYNISTIC", 
          "D) DOETH GOOD/DOETH EVIL", 
          "E) DOTH CONVERT TO CHRIST/DOTH REMAIN A JEW"
      ],
      correctAnswer: "B) BELIEVETH AND IS BAPTIZED/BELIEVETH NOT",
      points: 3
  },
  {
      options: [
          "A) HAVE ACCEPTED ME AS THEIR LORD / ARE UNSAVED", // Question 5
          "B) ARE BAPTIZED / ARE NOT BAPTIZED", 
          "C) ARE STILL HUMAN / ARE ZOMBIES", 
          "D) ARE ON THE RIGHT / ARE ON THE LEFT", 
          "E) ARE GOOD / ARE BAD",
          "F) HAVE GOOD HEARING / ARE DEAF",
          "G) HAVE DONE GOOD DEEDS / HAVE DONE WICKED DEEDS"
      ],
      correctAnswer: "G) HAVE DONE GOOD DEEDS / HAVE DONE WICKED DEEDS"
  },
  {
      options: [
          "A) TO PREACH THE GOSPEL TO ALL THE HOUSE OF ISRAEL", // Question 6 
          "B) TO SEEK AND SAVE WHAT WAS LOST",
          "C) TO ALL WHO WELCOME HIM",
          "D) TO MAKE REPARATIONS",
          "E) TO COLLECT INTEREST",
          "F) TO TAX THE RICH"
      ],
      correctAnswer: "B) TO SEEK AND SAVE WHAT WAS LOST",
      points: 3
  },
  {
      options: [
          "A) \"IF YOU DO NOT TREAT THE FATHER'S NAME AS HALLOWED, YOU WILL NOT GO TO HEAVEN\"", // Question 7
          "B) \"THE KINGDOM OF GOD WILL COME SHORTLY AFTER MY RETURN, FOR I WILL BE RAISED TO THE HEAVENS AFTER I DIE.\"", 
          "C) \"FOR IF YOU FORGIVE MEN THEIR TREPASSES, YOUR HEAVENLY FATHER ALSO WILL FORGIVE YOU; BUT IF YOU DO NOT FORGIVE MEN THEIR TREPASSES, NEITHER WILL YOUR FATHER FORGIVE YOUR TREPASSES.\"", 
          "D) \"FOR MY FATHER WILL NEVER LEAD YOU INTO TEMPTATION THAT YOU CANNOT HANDLE.\"", 
          "E) \"AMEN\""
      ],
      correctAnswer: "C) \"FOR IF YOU FORGIVE MEN THEIR TREPASSES, YOUR HEAVENLY FATHER ALSO WILL FORGIVE YOU; BUT IF YOU DO NOT FORGIVE MEN THEIR TREPASSES, NEITHER WILL YOUR FATHER FORGIVE YOUR TREPASSES.\"",
      points: 3
  },
  {
      options: [
          "A) THOSE WHO ACCEPT ME AS THEIR LORD AND SAVIOR.", // Question 8 
          "B) ONES WHO RUN FAST WHEN THEY SEE THESE SIGNS.", 
          "C) ONES WHO LIVE SUSTAINABILITY.", 
          "D) JEWS", 
          "E) ONE WHO PERSERVES TO THE END.",
          "F) TRUE CHRISTIAN"
      ],
      correctAnswer:  "E) ONE WHO PERSERVES TO THE END.",
      points: 3
  },
  {
      options: [
          "A) THEY KNEW JESUS WAS TALKING FIGURATIVELY ABOUT MOSES GIVING MANNA TO THE PEOPLE; THEY INVITED HIM TO STAY ON LONGER IN THEIR TOWN.", // Question 9 
          "B) THEY THOUGHT THAT JESUS WAS TALKING ABOUT MOSES AND THAT JESUS WAS COMPARING HIMSELF TO ELIJAH IN THE DESERT.", 
          "C) THEY REJECTED WHAT JESUS SAID, RETURNED TO THEIR FORMER WAY OF LIFE, AND NO LONGER ACCOMPANIED HIM.", 
          "D) THEY DID NOT KNOW WHAT JESUS WAS TALKING ABOUT, BUT THEY INVITED HIM TO DINNER." 

      ],
      correctAnswer: "C) THEY REJECTED WHAT JESUS SAID, RETURNED TO THEIR FORMER WAY OF LIFE, AND NO LONGER ACCOMPANIED HIM.",
      points: 3
  },
  {
      options: [
          "A) 1=FORGIVE, 2=FORGIVEN", // Question 10 
          "B) 1=SIN, 2=UNHAPPY", 
          "C) 1=CURSE. 2=CURSED", 
          "D) 1=PRAISE, 2=PRAISED", 
          "E) 1=BELIEVE, 2=SAVED",
          "F) 1=COMPLAIN, 2=DISLIKED"
      ],
      correctAnswer: "A) 1=FORGIVE, 2=FORGIVEN",
      points: 3
  },
  {
      options: [
          "A) \"THE RIGHT PARTS OF YOUR BODY ARE ALWAYS MORE EVIL THAN THE LEFT PARTS.\"", // Question 11
          "B) \"THAT WAY YOU WILL ONLY SIN HALF AS MUCH.\"", 
          "C) \"THIS IS NOT NECESSARY FOR PEOPLE WHO ARE SAVED.\"", 
          "D) \"THESE EXAGGERATIONS INDICATE WHAT ALL MEN DESERVE WITHOUT GRACE.\"", 
          "E) \"IT IS BETTER FOR YOU TO LOSE ONE PART OF YOUR BODY THAN FOR YOUR WHOLE BODY TO GO INTO HELL.\"",
      ],
      correctAnswer: "E) \"IT IS BETTER FOR YOU TO LOSE ONE PART OF YOUR BODY THAN FOR YOUR WHOLE BODY TO GO INTO HELL.\"",
      points: 3
  },
  {
      options: [
          "A) BELIEVETH IN ME, EMBRACE MY TEACHINGS.", // Question 12
          "B) ABANDONETH FOSSIL FUELS.", 
          "C) ACCEPT ME AS LORD AND SAVIOR.", 
          "D) TRY TO KEEP UP.", 
          "E) DENY HIMSELF, AND TAKE UP HIS CROSS.",
      ],
      correctAnswer: "E) DENY HIMSELF, AND TAKE UP HIS CROSS.",
      points: 3
  },
  {
      options: [
          "A) AS I HAVE COMMANDED YOU.", // Question 13
          "B) AS I LOVE YOU.", 
          "C) AS YOU LOVE GOD.", 
          "D) UNSELFISHLY", 
          "E) ON SUNDAYS.",
          "F) MORE THAN YOUR IN-LAWS."
      ],
      correctAnswer: "B) AS I LOVE YOU.",
      points: 3
  },
  {
      options: [
          "A) WILL ACKNOWLEDGE ME IN THE END.", // Question 14
          "B) IS NOT REALLY SAVED.", 
          "C) WILL ONLY RECEIVE HALF THE CROWNS AS THE OTHERS.", 
          "D) I WILL DENY BEFORE MY HEAVENLY FATHER.", 
          "E) BETTER HOPE I DON'T FIND OUT ABOUT IT.",
      ],
      correctAnswer: "D) I WILL DENY BEFORE MY HEAVENLY FATHER.",
      points: 3
  },
  {
      options: [
          "A) SINCE NOBODY IS GOOD, YOU CANNOT EARN HEAVEN BYU GOOD WORKS; SIMPLY BELIEVE IN ME AND ACCEPT ME AS LORD.", // Question 15
          "B) IF YOU WISH TO ENTER INTO LIFE, KEEP THE COMMANDMENTS.", 
          "C) MAKE A GOOD CONFESSION BEFORE YOU DIE.", 
          "D) JOHN 3:16.", 
          "E) THERE IS NO SUCH THING AS HELL, SO DO NOT WORRY ABOUT IT.",
      ],
      correctAnswer: "B) IF YOU WISH TO ENTER INTO LIFE, KEEP THE COMMANDMENTS.",
      points: 3
  },
  {
      options: [
          "A) \"ENTER BY THE NARROW GATE; FOR THE GATE IS WIDE AND THE WAY IS EASY THAT LEADS TO DESTRUCTION, AND THOSE WHO ENTER BY IT ARE MANY. FOR THE GATE IS NARROW AND THE WAY IS HARD THAT LEADS TO LIFE, AND THOSE WHO FIND IT ARE FEW.\"", // Question 16
          "B) \"ENTER BY THE WIDE GATE; FOR THE ROPAD TO HEAVEN IS WELL-TRAVELED, AND MOST FOLLOW THIS PATH. FOR THE GATE TO HELL IS NARROW, AND THE FEW WHO ENTER BY IT ARE BEHOLDEN TO EVIL.\"", 
          "C) \"ALL ROADS LEAD TO LIFE BECAUSE THERE IS NO SUCH THING AS HELL, AS THE FALSE RELIGIONS TEACH.\"", 
          "D) \"ALL ROADS LEAD TO LIFE FOR THOSE WHO CONFESS ME WITH THEIR LIPS AND BELIEVE THAT I AM GOD.\"", 
          "E) \"LIFE IS A JOURNEY, NOT A DESTINATION.\"",
      ],
      correctAnswer: "A) \"ENTER BY THE NARROW GATE; FOR THE GATE IS WIDE AND THE WAY IS EASY THAT LEADS TO DESTRUCTION, AND THOSE WHO ENTER BY IT ARE MANY. FOR THE GATE IS NARROW AND THE WAY IS HARD THAT LEADS TO LIFE, AND THOSE WHO FIND IT ARE FEW.\"",
      points: 3
  },
  {
      options: [
          "A) THE SHEEP ARE THE ONES WHO GAVE FOOD, DRINK, CLOTHES, WELCOME, AND CARE TO \"THE LEAST OF [JESUS'] BROTHERS AND SISTERS,\"THE GOATS ARE THE ONES WHO DID NOT.", // Question 17
          "B) THE GOATS ARE THE ONES WHO WERE \"SAVED,\" THE SHEEP ARE THE ONES WHO WERE NOT SAVED.", 
          "C) THE GOATS ARE THE ONES WHO \"DIDN'T WANDER FROM [JESUS'] FLOCK,\"THE SHEEP ARE THE ONES THAT STRAYED.", 
          "D) THE SHEEP ARE THE ONES WHO CONFESSED JESUS AND LIVED \"IN THE KINGDOM\" OF GOD, THE GOATS ARE THE ONES WHO DIDN'T FOLLOW JESUS AND LIVED OUTSIDE THE GATES.", 
          "E) THE SHEEP ARE THE ONES WITH SOFT WOOL, THE GOATS ARE THE ONES WITH SCRATCHY HAIR.",
          "F) JESUS DIDN'T SAY HIS BECAUSE THERE IS NO SUCH THING AS HELL."
      ],
      correctAnswer: "A) THE SHEEP ARE THE ONES WHO GAVE FOOD, DRINK, CLOTHES, WELCOME, AND CARE TO \"THE LEAST OF [JESUS'] BROTHERS AND SISTERS,\"THE GOATS ARE THE ONES WHO DID NOT.",
      points: 3
  },
  {
      options: [
          "A) HE SHALL SURELY BECOME A BELIEVER/THEY ARE STILL SAVED", // Question 18
          "B) HE WILL REJOIN THE HOUSE OF ISRAEL/THEY WILL BE CAST OUT AND RECEIVE \"AN EYE FOR AN EYE, A TOOTH FOR A TOOTH.\"", 
          "C) HE SHALL SURELY LIVE/THEY SHALL DIE.", 
          "D) HE IS NOW JUST/THEY ARE NOW WICKED.", 
          "E) HIS FRIENDS WILL SAY HE IS NO FUN/HE WILL FIT IN WITH THE WRONG CROWD.",
      ],
      correctAnswer: "C) HE SHALL SURELY LIVE/THEY SHALL DIE.",
      points: 3
  },
  {
      options: [
          "A) LISTEN YE: / AND DID RECEIVE INSTRUCTION", // Question 19
          "B) LISTEN YE: / AND DID DRINK", 
          "C) REPENT YE: / CONFESSING THEIR SINS", 
          "D) REPENT YE: / RECEIVING FORGIVENESS", 
          "E) RUN: / AND DID CROSS THE OTHER SIDE",
          "F) GATHER YE AROUND: / AND DID BATHE"
      ],
      correctAnswer: "C) REPENT YE: / CONFESSING THEIR SINS",
      points: 3
  },
  {
      options: [
          "A) WIPE AWAY EVERY TEAR FROM THEIR EYES", // Question 20
          "B) OVERTHROW THEIR ENEMIES", 
          "C) ANSWER THEIR PRAYERS", 
          "D) TAKE CARE OF ALL THEIR NEEDS", 
          "E) GIVE THEM DRINK, AND FEED THEM IN HIS HOUSE",
          "F) BE THEIR FATHER IF THEY ARE SAVED"
      ],
      correctAnswer: "A) WIPE AWAY EVERY TEAR FROM THEIR EYES",
      points: 3
  },
  {
      options: [
          "A) HOT TEMPERATURES, THE COLOR RED, THE COLOR BLACK", // Question 21
          "B) CATHOLICS, JEWS, MUSLIMS",
          "C) JUDGEMENTAL PEOPLE, MUSLIMS, PROTESTANTS",
          "D) DEATH, MOURNING, PAIN",
          "E) MOSQUITOS, SNAKES, SCORPIONS",
          "F) DANCING, PARTIES, SINGING"
      ],
      correctAnswer: "D) DEATH, MOURNING, PAIN",
      points: 3
  },
  {
      options: [
          "A) 1=CHRISTIANITY, 2=JUDAISM", // Question 22
          "B) 1=JUDAISM, 2=CHRISTIANITY",
          "C) 1=BELIEF, 2=GRACE",
          "D) 1=THE LAW, 2=GRACE",
          "E) 1=FAITH, 2=WORKS",
          "F) 1=A JUDGE, 2=A JURY"
      ],
      correctAnswer: "E) 1=FAITH, 2=WORKS",
      points: 3
  },
  
  {
      options: [
          "A) BELIEF", // Question 23
          "B) DIVINE KNOWLEDGE",
          "C) EXPERIENCE",
          "D) FAITH",
          "E) GRACE",
          "F) KARMA",
          "G) REVELATION",
          "H) SCIENCE",
          "I) WISDOM"
      ],
      correctAnswer: "D) FAITH",
      points: 3
  },
  {
      options: [
          "A) THE KNOWLEDGE OF GOD", // Question 24
          "B) THE RICHES OF HEAVEN",
          "C) THE KNOWLEDGE OF HEAVEN",
          "D) THE THINGS WHICH GOD HATH PREPARED FOR THEM THAT LOVE HIM",
          "E) THE CONSEQUENCES OF GLOBAL WARMING",
      ],
      correctAnswer: "D) THE THINGS WHICH GOD HATH PREPARED FOR THEM THAT LOVE HIM",
      points: 3
  },
  {
      options: [
          "A) \"FOR THERE ARE MANY MEDIATORS BETWEEN GOD AND MAN, JESUS, THE APOSTLES, THE POPES, THE PRIESTS, AND A BELIEVER'S PARENTS - ALL WHO TEACH THE BELIEVER TO FOLLOW CHRIST.\"", // Question 25
          "B) \"FOR THERE ARE ONLY TWO MEDIATORS BETWEEN GOD AND MANKIND, JESUS AND WHOEVER BRINGS A NON-BELIEVER TO FAITH IN JESUS.\"",
          "C) \"FOR THERE ARE ONLY TWO MEDIATORS BETWEEN GOD AND A PERSON, JESUS AND A MAN'S PARENTS, BOTH OF WHOM GIVE LIFE TO A MAN.\"",
          "D) \"FOR THERE IS ONE GOD AND ONE MEDIATOR BETWEEN GOD AND MANKIND, THE MAN CHRIST JESUS, WHO GAVE HIMSELF AS A RANSOM FOR ALL PEOPLE.\"",
          "E) \"FOR THERE ARE MANY MEDIATORS, SCHOLARS OF THE LAW, WHO ONLY GET PAID IF YOU GET TO HEAVEN.\"",
      ],
      correctAnswer:  "D) \"FOR THERE IS ONE GOD AND ONE MEDIATOR BETWEEN GOD AND MANKIND, THE MAN CHRIST JESUS, WHO GAVE HIMSELF AS A RANSOM FOR ALL PEOPLE.\"",
      points: 3
  },
  {
      options: [
          "A) 1=KINDNESS, 2=SEVERITY", // Question 26
          "B) 1=GRACE, 2=FORGIVENESS",
          "C) 1=GRACE, 2=FAITHFULNESS",
          "D) 1=WATER, 2=FERTILIZER",
          "E) 1=FIRE, 2=WATER",
      ],
      correctAnswer: "A) 1=KINDNESS, 2=SEVERITY",
      points: 3
  },
  {
      options: [
          "A) THE SELF-RIGHTEOUS OR HYPOCRITICAL OR PHARISEE", // Question 27
          "B) FORNICATORS NOR IDOLATER NOR ADULTERS NOR BOY PROSTITUTES NOR SODOMITES NOR THIEVES NOR THE GREEDY NOR DRUNKARDS NOR SLANDERERS NOR ROBBERS.",
          "C) UNBELIEVERS OR THE UN-SAVED",
          "D) JEWS NOR MUSLIMS NOR PAGANS NOR BELIEVERS",
          "E) RACISTS NOR HOMOPHOBES",
      ],
      correctAnswer: "B) FORNICATORS NOR IDOLATER NOR ADULTERS NOR BOY PROSTITUTES NOR SODOMITES NOR THIEVES NOR THE GREEDY NOR DRUNKARDS NOR SLANDERERS NOR ROBBERS.",
      points: 3
  },
  {
      options: [
          "A) TRUE", // Question 28
          "B) FALSE"
      ],
      correctAnswer: "A) TRUE",
      points: 3
  },
  {
      options: [
          "A) IS THE PLANT THAT YIELDS THE HIGHEST CROP", // Question 29
          "B) IS THE HARDEST PLANT TO GROW BUT PRODUCES THE MOST VALUABLE OF SPICES",
          "C) IS THE SMALLEST OF ALL THE SEEDS, YET WHEN FULL-GROWN IT IS THE LARGEST OF PLANTS",
          "D) ALWAY GROWS PEACEFULLY WITH OTHER TYPES OF PLANTS, REGARDLESS OF WHAT TYPES OF PLANTS ARE AROUND IT",
          "E) CROWDS OUT AND REPLACES OTHER PLANTS",
          "F) IS GOOD WITH TWO PICKLES ON CHICKEN AND BREAD"
      ],
      correctAnswer: "C) IS THE SMALLEST OF ALL THE SEEDS, YET WHEN FULL-GROWN IT IS THE LARGEST OF PLANTS",
      points: 3
  },
  {
      options: [
          "A) NON-BELIEVERS FROM THE BELIEVERS", // Question 30
          "B) JEWS FROM THE CHRISTIANS",
          "C) UNSAVED FROM THE SAVED",
          "D) WICKED FROM THE RIGHTEOUS",
          "E) MURDERERS FROM THE PEACEFUL",
          "F) CLIMATE DENIERS FROM THE NORMAL PEOPLE",
          "G) JESUS DID NOT SAY THIS, BUT CORRECTED ONE OF HIS FOLLOWERS WHO DID."
      ],
      correctAnswer: "D) WICKED FROM THE RIGHTEOUS",
      points: 3
  },
  {
      options: [
          "A) ONLY THE PHARISEE BECAUSE HE FASTED AND DID NOT ROB, DO EVIL, OR COMMIT ADULTERY - WHERE AS THE TAX COLLECTOR EVEN ADMITTED THAT HE WAS A SINNER.", // Question 31
          "B) ONLY THE TAX COLLECTOR BECAUSE HE HUMBLED HIMSELF WHEREAS THE PHARISEE EXALTED HIMSELF.",
          "C) BOTH THE PHARISEE AND THE TAX COLLECTOR BECAUSE BOTH PRAYED TO GOD IN THEIR OWN WAY.",
          "D) NEITHER THE PHARISEE NOR THE TAX COLLECTOR BECAUSE EACH OF THEM WAS FLAWED IN DIFFERENT WAYS.",
          "E) THE SCRIPTURE DOES NOT SAY BECAUSE JESUS WANTED THE AUDIENCE TO PONDER HIS LARGER MESSAGE WITHOUT TELLING THEM THE ANSWER.",
      ],
      correctAnswer: "B) ONLY THE TAX COLLECTOR BECAUSE HE HUMBLED HIMSELF WHEREAS THE PHARISEE EXALTED HIMSELF.",
      points: 3
  },
  {
      options: [
          "A) 1=CHURCH, 2=PHARISEES", // Question 32
          "B) 1=BELIEVERS, 2=NON-BELIEVERS",
          "C) 1=WORLD, 2=EVILDOERS",
          "D) 1=JEWS, 2=PAGANS",
          "E) 1=CHRISTIANS, 2=DEMONS",
          "F) 1=WHEAT, 2=CHAFF"
      ],
      correctAnswer: "C) 1=WORLD, 2=EVILDOERS",
      points: 3
  },
  {
      options: [
          "A) THAT SHEEP WILL BE DINNER", // Question 33
          "B) THAT SHEEP WILL BE BRANDED WITH A '666'",
          "C) THAT SHEEP WILL BE TAKEN BACK TO THE FLOCK AND CONSIDERED A BLACK SHEEP FROM THAT DAY ON",
          "D) HE WILL REMOVE IT FROM THE FLOCK",
          "E) HE REJOICES MORE OVER IT THAN OVER THE NINETY-NINE THAT DID NOT STRAY",
      ],
      correctAnswer: "E) HE REJOICES MORE OVER IT THAN OVER THE NINETY-NINE THAT DID NOT STRAY",
      points: 3
  }
  // Add more questions as needed
];

// Correct answers letters for modal display
const answerLetters = [
    "A","D","D","B","G","B","C","E","C","A","E",
    "E","B","D","B","A","A","C","C","A","D",
    "E","D","D","D","A","B","A","C","D","B","C","E"
  ];
  
  // ---------- Modal Logic ----------
  function openAnswersModal() {
    const modal = document.getElementById('answersModal');
    const container = document.getElementById('qa-container');
    container.innerHTML = '';
    answerLetters.forEach((letter, idx) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'question-wrapper';
  
      const img = document.createElement('img');
      img.src = `/assets/q${idx + 1}.webp`;
      img.alt = `Question ${idx + 1}`;
      img.className = 'question-image';
  
      const ans = document.createElement('p');
      ans.className = 'answer';
      ans.innerHTML = `<strong>${letter}</strong>`;
  
      wrapper.appendChild(img);
      wrapper.appendChild(ans);
      container.appendChild(wrapper);
    });
    modal.style.display = 'flex';
  }
  
  function closeAnswersModal() {
    document.getElementById('answersModal').style.display = 'none';
  }
  
  // ---------- Score Page Logic ----------
  
  // Get userAnswers from URL
  const urlParams = new URLSearchParams(window.location.search);
  const userAnswersParam = urlParams.get('userAnswers');
  if (!userAnswersParam) {
    alert('Unable to calculate your score. Please complete the test.');
    window.location.href = 'mobile.html';
  }
  const userAnswers = JSON.parse(userAnswersParam);
  
  function calculateScore() {
    let score = 0;

    questions.forEach((q, i) => {
        if ((userAnswers[i] || '').trim().toUpperCase() === (q.correctAnswer || '').trim().toUpperCase()) {
            if (i === 0 || i === 1) {
                score += 3.5; // First 2 questions
            } else {
                score += 3;   // Remaining 31 questions
            }
        }
    });

    return Math.round(score); // Round to whole number if you want it to show like "96" instead of "96.5"
}


  
  // Update Server
  let scoreSubmitted = localStorage.getItem('scoreSubmitted') === 'true';
  function updateServerScore(score) {
    if (scoreSubmitted) return;
    scoreSubmitted = true;
    localStorage.setItem('scoreSubmitted', 'true');
    fetch('https://heaveniqtest.onrender.com/set_score', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `score=${score}`
    })
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
  }
  
  function renderScorePage() {
    const body = document.body;
    body.style.background = "url('/assets/closingpage.webp') center center / cover no-repeat";
    
    const score = calculateScore();
    updateServerScore(score);
  
    // Create the container for the score page
    const container = document.createElement('div');
    container.className = 'white-box';
    body.appendChild(container);
  
    // Score display
    const scoreHeader = document.createElement('h1');
    scoreHeader.className = 'score-header';
    scoreHeader.textContent = 'YOUR SCORE IS:';
    container.appendChild(scoreHeader);
  
    const scoreBox = document.createElement('div');
    scoreBox.className = 'score-box';
  
    const scoreText = document.createElement('span');
    scoreText.className = 'score-text';
    scoreText.textContent = `${score} / 100`;
    scoreBox.appendChild(scoreText);
    container.appendChild(scoreBox);
  
    // Bible graphic and other top graphics (before buttons)
    const topImagesWrapper = document.createElement('div');
    topImagesWrapper.className = 'top-graphics';
  
    const bibleImage = document.createElement('img');
    bibleImage.src = '/assets/biblegraphic.webp';
    bibleImage.alt = 'Bible Graphic';
    bibleImage.className = 'stacked-image';
    topImagesWrapper.appendChild(bibleImage);
  
    container.appendChild(topImagesWrapper);
  
    // Buttons grid (2 rows × 3 columns) - Under the Bible graphic
    const buttonGrid = document.createElement('div');
    buttonGrid.className = 'button-grid';
  
    const buttons = [
      { src: '/assets/answers.webp', alt: 'Answers', action: openAnswersModal },
      { src: '/assets/buttonlearn.webp', alt: 'Learn', action: openLearnModal },
      { src: '/assets/invite.webp', alt: 'Invite', action: openInviteModal },
      { src: '/assets/feedback.webp', alt: 'Feedback', action: openFeedbackModal },
      { src: '/assets/sources.webp', alt: 'Sources', action: openSourcesModal },
      { src: '/assets/aboutus.webp', alt: 'About Us', action: openAboutusmodal }
    ];
  
    buttons.forEach((btn) => {
        const img = document.createElement('img');
        img.src = btn.src;
        img.alt = btn.alt;
        img.className = 'button-image';
      
        // SPECIAL STYLING for answers.webp
        if (btn.src.includes('answers.webp')) {
          img.classList.add('answers-image');
        }
      
        if (btn.url) {
          const a = document.createElement('a');
          a.href = btn.url;
          a.appendChild(img);
          buttonGrid.appendChild(a);
        } else if (btn.action) {
          img.style.cursor = 'pointer';
          img.addEventListener('click', btn.action);
      
          // Wrap in div to keep spacing consistent
          const wrapper = document.createElement('div');
          wrapper.className = 'button-wrapper';
          wrapper.appendChild(img);
          buttonGrid.appendChild(wrapper);
        }
      });
      
    container.appendChild(buttonGrid);
  
    // Texts and home button (should be at the bottom of the structure)
    const bottomTextWrapper = document.createElement('div');
    bottomTextWrapper.className = 'bottom-text-wrapper';
  
    const firstText = document.createElement('img');
    firstText.src = '/assets/firsttext.webp';
    firstText.alt = 'First Text';
    firstText.className = 'stacked-image';
    bottomTextWrapper.appendChild(firstText);
  
    const secondText = document.createElement('img');
    secondText.src = '/assets/secondtext.webp';
    secondText.alt = 'Second Text';
    secondText.className = 'stacked-image';
    bottomTextWrapper.appendChild(secondText);
  
    const homeButton = document.createElement('img');
    homeButton.src = '/assets/homebutton.webp';
    homeButton.alt = 'Home Button';
    homeButton.className = 'home-button';
    homeButton.addEventListener('click', () => window.location.href = 'index.html');
    bottomTextWrapper.appendChild(homeButton);
  
    container.appendChild(bottomTextWrapper);
  }
  
  
// Insert modal HTML into body once (only if not already present)
if (!document.getElementById('answersModal')) {
    const modalHTML = `
      <div id="answersModal" class="overlay hidden">
        <div class="content-box">
          <span class="close-button">&times;</span>
          <h1 class="title">Answers</h1>
          <div id="qa-container" class="qa-container"></div>
          <button id="okButton"><img src="/assets/OkButton.webp" alt="OK Button" /></button>
        </div>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }
  
  // ✅ Always attach the listener, regardless of whether modal existed already
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("answersModal");
    const okButton = document.getElementById("okButton");
  
    function closeAnswersModal() {
      modal.classList.add('hidden');
      modal.style.display = "none";
    }
  
    function ensureModalHiddenOnLoad() {
      modal.classList.add('hidden');
      modal.style.display = "none";
    }
  
    if (okButton) {
      okButton.addEventListener("click", closeAnswersModal);
    }
  
    ensureModalHiddenOnLoad(); // 🔒 Ensure hidden on page load
  });
  
  function learnModalHTML() {
    const modalHTML = 
    `
    <div id="learnModal" class="overlay hidden">
      <div class="content-box">
        <img src="/static/assets/learnheader.webp" alt="Learn Header" class="learn-header">
        <div class="text-container">
          <img src="/static/assets/learntext.webp" alt="Learn Text" class="learn-text">
        </div>
        <div class="video-container">
          <iframe 
            id="heavenVideo" 
            src="link to the youtube url here" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        <button id="closeLearnModalBtn">OK</button>
      </div>
    </div>
    `;
    
    // Inject HTML into the page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  
    // Now that it's in the DOM, we can safely attach the event listener
    const closeBtn = document.getElementById("closeLearnModalBtn");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        document.getElementById("learnModal").style.display = "none";
      });
    }
  }
  
  // Modal open logic stays the same
  function openLearnModal() {
    document.getElementById("learnModal").classList.remove("hidden");
    document.getElementById("learnModal").style.display = "flex";
  }
  
// Invite Button Functions 
function openInviteModal() {
  const inviteModal = document.getElementById('inviteModal');
  if (inviteModal) {
    inviteModal.classList.remove('hidden');
    inviteModal.style.display = 'flex';
  }
}

document.getElementById('cancelInviteModalBtn')?.addEventListener('click', () => {
  const modal = document.getElementById('inviteModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }
});



// Feedback Modal Logic (Trigger from Feedback Image or Button)
function openFeedbackModal(e) {
  e.preventDefault(); // Prevent any other action from triggering
  const feedbackModal = document.getElementById('feedbackModal');
  feedbackModal.classList.remove('hidden');
  feedbackModal.style.display = 'flex';
}
// Ensure feedback modal is closed on cancel
document.querySelector('.cancel-btn')?.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the default behavior
  const modal = document.getElementById('feedbackModal');
  modal.classList.add('hidden');
  modal.style.display = 'none';
});

function openSourcesModal() {
  const modalHTML = `
    <!-- Sources Modal -->
    <div id="sourcesModal" class="overlay hidden">
      <div class="white-box">
        <!-- Header Section -->
        <header>
          <img src="/assets/sourceheader.webp" alt="Source Header" class="source-header">
        </header>

        <!-- Content Container -->
        <div class="content-container">
          <div class="content-scroll">
            <div class="image-container">
              <img src="/assets/sourcepicture.webp" alt="Source Picture" class="source-picture">
            </div>
            <div class="text-image-container">
              <img src="/assets/sourcetext.webp" alt="Source Text" class="source-text">
            </div>
          </div>
        </div>

        <!-- Back Button (Close Modal) -->
        <div class="back-btn-container">
          <button id="closeSourcesModalBtn" class="modal-close-btn">
            <img src="/assets/backbutton.webp" alt="Back Button" class="back-button">
          </button>
        </div>
      </div>
    </div>
  `;

  // Append the modal HTML to the body
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Get the modal and the close button
  const modal = document.getElementById('sourcesModal');
  const closeBtn = document.getElementById("closeSourcesModalBtn");

  // Close the modal when the close button is clicked
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  });

  // Show the modal
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
}



function openAboutusmodal() {
  const modalHTML = `
    <!-- About Us Modal -->
    <div id="aboutUsModal" class="overlay hidden">
      <div class="white-box">
        <!-- Header -->
        <header>
          <img src="/assets/aboutheader.webp" alt="About Header" class="source-header">
        </header>

        <!-- Two-Column Layout -->
        <div class="content-container two-columns">
          <div class="image-column">
            <img src="/assets/Jeremiah.webp" alt="Jeremiah" class="jeremiah">
          </div>
          <div class="text-column">
            <img src="/assets/abouttext.webp" alt="About Text" class="about-text">
            <img src="/assets/ourstory.webp" alt="Our Story" class="our-story">
            <img src="/assets/abouttext2.webp" alt="More Text" class="about-text2">
          </div>
        </div>

        <!-- Back Button (Closes Modal) -->
        <div class="back-btn-container">
          <button id="closeAboutUsModalBtn" class="modal-close-btn">
            <img src="/assets/backbutton.webp" alt="Back Button" class="back-button">
          </button>
        </div>
      </div>
    </div>
  `;

  // Append to body
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Select modal and close button
  const modal = document.getElementById('aboutUsModal');
  const closeBtn = document.getElementById("closeAboutUsModalBtn");

  // Add close functionality
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  });

  // Show modal
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
}



  // Initialize
  window.onload = renderScorePage;
  