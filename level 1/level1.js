
    var words = {
      animals: [
        { word: "elephant", hint: "It's the largest land animal." },
        { word: "lion", hint: "It's known as the king of the jungle." },
        { word: "giraffe", hint: "It has a long neck and spots." },
        { word: "zebra", hint: "It has black and white stripes." }
      ],
      fruits: [
        { word: "apple", hint: "It's red or green and grows on trees." },
        { word: "banana", hint: "It's long and yellow." },
        { word: "orange", hint: "It's round and orange and has a citrus flavor." },
        { word: "strawberry", hint: "It's red and has seeds on the outside." }
      ],
      countries: [
        { word: "usa", hint: "It's a large country in North America." },
        { word: "china", hint: "It's the most populous country in the world." },
        { word: "india", hint: "It's known for its diverse culture and cuisine." },
        { word: "russia", hint: "It's the largest country by land area." }
      ]
    };

    var currentWord;
    var categorySelect = document.getElementById('category');
    var hintElement = document.getElementById('hint');
    var guessElement = document.getElementById('guess');
    var resultElement = document.getElementById('result');
    var triesElement = document.getElementById('tries');
    var triesLeft = 5;

    function startGame() {
      triesLeft = 5;
      triesElement.textContent = "Tries left: " + triesLeft
      var category = categorySelect.value
      var wordList = words[category];
      var randomIndex = Math.floor(Math.random() * wordList.length)
      currentWord = wordList[randomIndex].word
      var hint = wordList[randomIndex].hint;
      hintElement.textContent = "Hint: " + hint;
      resultElement.textContent = "";
      guessElement.value = "";
    }

    function checkGuess() {
      var guess = guessElement.value.toLowerCase();
      triesLeft--;
      triesElement.textContent = "Tries left: " + triesLeft;
      if (guess === currentWord) {
        resultElement.textContent = "Congratulations! You guessed it right!";
      } else {
        if (triesLeft === 0) {
          resultElement.textContent = "Sorry, you've run out of tries. The correct word was: " + currentWord;
          return;
        }
        resultElement.textContent = "Sorry, try again!";
      }
    }