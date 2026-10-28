function showScreen(id) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Password: date you first met in the auto
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passwordInput.value.trim() === "10/12/2022") {
    passwordError.textContent = "";
    showScreen("welcomeScreen");
  } else {
    passwordError.textContent = "Wrong date, Bubu! Think about our first auto ride 🛺💗";
    passwordInput.value = "";
  }
});

document.getElementById("startButton").addEventListener("click", () => {
  showScreen("memoriesScreen");
});

// Short, personal memories
const memories = [
  {
    emoji: "🥹💗",
    title: "I'm so lucky to have you",
    text: "Enni ups and downs vachina, malli manam 'WE ARE US' avvadam naaku chala special. I'm happy that I have you, my handsome boy."
  },
  {
    emoji: "🫶🏻",
    title: "The way you changed",
    text: "Naa kosam nee kopam tagginchukovadaniki nuvvu chesina efforts nenu notice chesanu, Bubu. Nobody is perfect; trying to understand each other and grow together matters to me."
  },
  {
    emoji: "😂🎶",
    title: "Your little pichidi",
    text: "Sometimes nake nenu boring person la anipistha, but you always choose me thankuuuuu chooomuch kuchupuchu."
  },
  {
    emoji: "🌟💗",
    title: "My handsome boy",
    text: "Neeku em cheyyali anipisthe. I genuinely want to see you succeed. Believe in yourself, darling. I'll always cheer for you and support you."
  },
];

let memoryIndex = 0;

function renderMemory() {
  const memory = memories[memoryIndex];
  document.getElementById("memoryEmoji").textContent = memory.emoji;
  document.getElementById("memoryTitle").textContent = memory.title;
  document.getElementById("memoryText").textContent = memory.text;
  document.getElementById("memoryDots").textContent =
    memories.map((_, i) => i === memoryIndex ? "●" : "○").join(" ");
}

document.getElementById("nextMemory").addEventListener("click", () => {
  memoryIndex++;
  if (memoryIndex >= memories.length) {
    showScreen("visitQuestion");
  } else {
    renderMemory();
  }
});

// Cute visit question. The chalk is only a harmless cartoon joke.
const yesVisit = document.getElementById("yesVisit");
const noVisit = document.getElementById("noVisit");
const visitMessage = document.getElementById("visitMessage");
const girlCartoon = document.getElementById("girlCartoon");

yesVisit.addEventListener("click", () => {
  girlCartoon.textContent = "👧🏻 💖 🥰";
  visitMessage.textContent = "YAYYYYY! Imaginary hug ready, Bubu! 😂💗";
  yesVisit.textContent = "COMINGGG 💕";
  noVisit.hidden = true;
  setTimeout(() => showScreen("prankScreen"), 1500);
});

noVisit.addEventListener("click", () => {
  girlCartoon.textContent = "👧🏻 🧱😤";
  visitMessage.textContent = "CHALK WARNING! 😂 Just kidding, mister! One more chance to choose YES! 💗";
  noVisit.textContent = "Wait, let me think! 😭";
  noVisit.style.transform =
    `translate(${Math.random() * 40 - 20}px, ${Math.random() * 20 - 10}px)`;
});

// Prank reveal leads to the heartfelt ending
document.getElementById("showLetter").addEventListener("click", () => {
  loveIndex = 0;
  renderLoveStep();
  showScreen("loveEnding");
});

// Short emotional letter
const loveSteps = [
  {
    title: "My Bubu 🧸💗",
    text: "I'm genuinely so lucky to have you in my life. Enni ups and downs vachina, malli manam 'WE ARE US' avvadam naaku chala special. I'm happy that I have you, my handsome boy. 🥹❤️"
  }
  {
    title: "Let's grow together 💌",
    text: "Life eppudu easy ga undadhu, but let's keep learning, understanding, and supporting each other. Manam problems tho fight cheddam, okaritho okaram kaadhu. Let's work hard and build a future that makes us both proud. 🫶🏻"
  },
  {
    title: "Always my Bubu"
    text: "Nuvvu naaku dorakadam oka special feeling ra. Mana silly talks, reels, songs, laughs, and little memories anni naaku precious. I'm so lucky to have you, my handsome boy. I believe in you, and I'm rooting for us. Love you, Bubu. 💗"
  }
];

let loveIndex = 0;

function renderLoveStep() {
  const step = loveSteps[loveIndex];
  document.getElementById("loveTitle").textContent = step.title;
  document.getElementById("loveText").textContent = step.text;
  document.getElementById("stepCount").textContent =
    `Step ${loveIndex + 1} of ${loveSteps.length}`;
  document.getElementById("loveDots").textContent =
    loveSteps.map((_, i) => i <= loveIndex ? "●" : "○").join(" ");
  document.getElementById("nextLove").textContent =
    loveIndex === loveSteps.length - 1 ? "Read Again, Bubu 💗" : "Read Next 💗";
}

document.getElementById("nextLove").addEventListener("click", () => {
  loveIndex = loveIndex === loveSteps.length - 1 ? 0 : loveIndex + 1;
  renderLoveStep();
});

renderMemory();
renderLoveStep();
