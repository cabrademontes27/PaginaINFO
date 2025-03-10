<template>
    <div class="learn-container">
      <header class="game-header">
        <router-link to="/" class="back-button">
          <i class="fas fa-arrow-left"></i> Volver al inicio
        </router-link>
        <div class="game-stats">
          <div class="stat-item">
            <span class="stat-label">Puntuación</span>
            <span class="stat-value">{{ score }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Palabras restantes</span>
            <span class="stat-value">{{ words.length }}</span>
          </div>
        </div>
      </header>
  
      <main class="game-main">
        <div class="game-card">
          <h1 class="game-title">Aprende Braille</h1>
  
          <div class="word-display" :class="{ incorrect: showIncorrect }">
            <!-- Show the current word in Braille -->
            <div class="target-word">
              <span
                v-for="(char, index) in currentWordBraille"
                :key="index"
                class="braille-char"
              >
                {{ char }}
              </span>
            </div>
  
            <!-- Show the user’s typed input in Braille -->
            <div class="user-input-display">
              <span
                v-for="(char, index) in userInput"
                :key="index"
                class="input-char"
                :class="getCharClass(index)"
              >
                {{ brailleMap[char] || char }}
              </span>
            </div>
  
            <!-- Optional: show translation of the current word -->
            <div v-if="showTranslation" class="translation-display">
              <strong>Traducción:</strong> {{ translations[currentWord] }}
            </div>
          </div>
  
          <div class="feedback-message" :class="feedbackClass">
            {{ feedbackMessage }}
          </div>
  
          <div class="instructions">
            <p>Escribe las letras y luego presiona Enter para comprobar</p>
            <p>Usa tu teclado físico con los stickers Braille</p>
            <p>Presiona Retroceso (Backspace) para borrar</p>
          </div>
        </div>
      </main>
  
      <!-- Audio elements -->
      <!-- Make sure these paths match where your MP3 files actually live -->
      <audio ref="correctSound" src="/public/sounds/win.mp3"></audio>
      <audio ref="incorrectSound" src="/public/sounds/losing.wav"></audio>
  
      <!-- Letters audio (optional) -->
      <audio
        v-for="(sound, letter) in letterSounds"
        :key="letter"
        :ref="`${letter}Sound`"
        :src="sound"
      ></audio>
    </div>
  </template>
  
  <script>
  export default {
    name: "LearnBraille",
    data() {
      return {
        // Braille mapping
        brailleMap: {
          a: "⠁", b: "⠃", c: "⠉", d: "⠙", e: "⠑",
          f: "⠋", g: "⠛", h: "⠓", i: "⠊", j: "⠚",
          k: "⠅", l: "⠇", m: "⠍", n: "⠝", o: "⠕",
          p: "⠏", q: "⠟", r: "⠗", s: "⠎", t: "⠞",
          u: "⠥", v: "⠧", w: "⠺", x: "⠭", y: "⠽", z: "⠵",
        },
        // Example translations for display
        translations: {
          hola: "HOLA",
          mundo: "MUNDO",
          braille: "BRAILLE",
          accesible: "ACCESIBLE",
          tecnologia: "TECNOLOGIA",
        },
        score: 0,
        words: ["hola", "mundo", "braille", "accesible", "tecnologia"],
        currentWord: "",
        userInput: "",
        showIncorrect: false,
        feedbackMessage: "",
        letterSounds: {},
        showTranslation: false, // controls whether to display the translation
      };
    },
    computed: {
      // Braille version of the current word
      currentWordBraille() {
        return this.currentWord
          .split("")
          .map((char) => this.brailleMap[char] || char);
      },
      // Computed to decide feedback text color (CSS class)
      feedbackClass() {
        return {
          correct: this.feedbackMessage === "¡Correcto!",
          incorrect: this.feedbackMessage === "Intenta nuevamente",
        };
      },
    },
    mounted() {
      this.initializeGame();
      window.addEventListener("keydown", this.handleKeyPress);
    },
    beforeUnmount() {
      window.removeEventListener("keydown", this.handleKeyPress);
    },
    methods: {
      initializeGame() {
        this.loadSounds();
        this.startNewRound();
      },
      startNewRound() {
        // If no more words, the game is over
        if (this.words.length === 0) {
          this.feedbackMessage = "¡Juego completado!";
          return;
        }
        // Get the next word
        this.currentWord = this.words.shift().toLowerCase();
        this.userInput = "";
        this.showIncorrect = false;
        this.feedbackMessage = "";
        this.showTranslation = false;
      },
  
      handleKeyPress(event) {
        const key = event.key.toLowerCase();
  
        // Handle backspace
        if (key === "backspace") {
          event.preventDefault(); // prevent browser from going back
          this.userInput = this.userInput.slice(0, -1);
          return;
        }
  
        // Pressing Enter to check the entire typed word
        if (key === "enter") {
          event.preventDefault();
          this.verifyWord();
          return;
        }
  
        // Only allow a-z
        if (/^[a-z]$/.test(key)) {
          this.userInput += key;
          this.playSound(key);
          // If user typed the same length as the currentWord, do an immediate check
          if (this.userInput.length === this.currentWord.length) {
            this.verifyWord();
          }
        }
      },
  
      // Decides if the typed word is correct or not
      verifyWord() {
        if (this.userInput === this.currentWord) {
          this.handleCorrectAnswer();
        } else {
          this.handleWrongAnswer();
        }
      },
  
      // Color the typed letters
      getCharClass(index) {
        return {
          "correct-char": this.userInput[index] === this.currentWord[index],
          "incorrect-char": this.userInput[index] !== this.currentWord[index],
        };
      },
  
      handleCorrectAnswer() {
        this.score += 10;
        this.feedbackMessage = "¡Correcto!";
        this.showTranslation = true;
        this.$refs.correctSound.play();
  
        // Show translation in the feedback
        if (this.translations[this.currentWord]) {
          this.feedbackMessage += ` (${this.translations[this.currentWord]})`;
        }
  
        // Advance to next word after 1.5s
        setTimeout(() => {
          this.startNewRound();
        }, 1500);
      },
  
      handleWrongAnswer() {
        this.feedbackMessage = "Intenta nuevamente";
        this.showIncorrect = true;
        this.$refs.incorrectSound.play();
        if (navigator.vibrate) {
          navigator.vibrate(500);
        }
  
        // Reset user input after 1s
        setTimeout(() => {
          this.userInput = "";
          this.showIncorrect = false;
          this.feedbackMessage = "";
        }, 1000);
      },
  
      // Loads letter-specific audio (optional)
      async loadSounds() {
        try {
          const letters = "abcdefghijklmnopqrstuvwxyz".split("");
          for (const letter of letters) {
            // Adjust path to your actual folder if needed
            this.letterSounds[letter] = `/sounds/letters/${letter}.mp3`;
          }
        } catch (error) {
          console.error("Error loading sounds:", error);
        }
      },
  
      // Plays the letter’s audio (optional)
      playSound(letter) {
        const soundPlayer = this.$refs[`${letter}Sound`];
        if (soundPlayer) {
          soundPlayer.currentTime = 0;
          soundPlayer.play();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .learn-container {
    background: #f5e6d3;
    min-height: 100vh;
    padding: 2rem;
  }
  
  .game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .back-button {
    color: #6d6150;
    text-decoration: none;
    font-size: 1.1rem;
    transition: opacity 0.2s;
  }
  .back-button:hover {
    opacity: 0.8;
  }
  
  .game-stats {
    display: flex;
    gap: 2rem;
  }
  .stat-item {
    background: rgba(255, 255, 255, 0.9);
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .stat-label {
    display: block;
    color: #968877;
    font-size: 0.9rem;
  }
  .stat-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: #6d6150;
  }
  
  .game-main {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .game-card {
    background: white;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .game-title {
    color: #6d6150;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }
  
  .word-display {
    background: #fff9f0;
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem 0;
    transition: all 0.3s ease;
    border: 3px solid transparent;
  }
  .word-display.incorrect {
    animation: shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    border-color: #ff4444;
    background-color: #fff0f0;
  }
  
  .target-word {
    font-size: 3rem;
    text-align: center;
    letter-spacing: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .user-input-display {
    font-size: 2rem;
    text-align: center;
    letter-spacing: 0.5rem;
    color: #a4937f;
    min-height: 60px;
  }
  
  .input-char {
    position: relative;
    display: inline-block;
    transition: transform 0.1s ease;
    margin: 0 2px;
  }
  .input-char:last-child {
    animation: pop 0.2s ease;
  }
  
  /* Green if correct, red if wrong */
  .input-char.correct-char {
    color: #4caf50;
  }
  .input-char.incorrect-char {
    color: #ff4444;
    animation: wobble 0.3s ease;
  }
  
  /* Feedback styling */
  .feedback-message {
    text-align: center;
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    transition: all 0.3s ease;
  }
  .feedback-message.correct {
    background: #4caf50;
    color: white;
  }
  .feedback-message.incorrect {
    background: #f44336;
    color: white;
  }
  
  /* Extra text */
  .instructions {
    text-align: center;
    color: #968877;
    margin-top: 2rem;
    line-height: 1.6;
    font-size: 0.95rem;
  }
  
  /* Translation styling */
  .translation-display {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #4caf50;
    text-align: center;
  }
  
  /* Animations */
  @keyframes shake {
    10%, 90% { transform: translateX(-2px); }
    20%, 80% { transform: translateX(3px); }
    30%, 50%, 70% { transform: translateX(-4px); }
    40%, 60% { transform: translateX(4px); }
  }
  @keyframes pop {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
  @keyframes wobble {
    0% { transform: translateY(0); }
    25% { transform: translateY(-5px); }
    50% { transform: translateY(3px); }
    75% { transform: translateY(-2px); }
    100% { transform: translateY(0); }
  }
  
  @media (max-width: 768px) {
    .game-header {
      flex-direction: column;
      gap: 1rem;
    }
    .game-stats {
      flex-wrap: wrap;
      justify-content: center;
    }
    .target-word {
      font-size: 2rem;
      letter-spacing: 0.5rem;
    }
    .user-input-display {
      font-size: 1.5rem;
    }
  }
  </style>
  