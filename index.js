function start() {
  let guessesLeft = 9, wins = 0, losses = 0, guesses = [ ];

  const letters = ['a','b','c','d','e','f','g','h','i',
    'j','k','l','m','n','o','p', 'q','r',
    's','t','u','v','w','x','y','z'
  ];

  let randomLetter = letters[Math.floor(Math.random() * letters.length)];

  document.body.addEventListener('keydown', function () {
    const key = event.key;
    if (key.length === 1 && key.match(/[a-z]/i)) {
      if (key == randomLetter) {
        alert('You guessed right!');
        guesses = [ ]; guessesLeft = 9;
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
        wins++;
      } else {
        if (guesses.includes(key)) {
          alert('You already typed this letter: ' + key);
        } else {
          if (guessesLeft == 0) {
            alert('You could not find the letter.');
            losses++;
            guesses = [ ]; guessesLeft = 9; 
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
          } else {
            guesses.push(key);
            guessesLeft--;
          }
        }
      }
      document.getElementById('wins').innerHTML = wins.toString(); 
      document.getElementById('losses').innerHTML = losses.toString();
      document.getElementById('guessesLeft').innerHTML = guessesLeft.toString();
      document.getElementById('guesses').innerHTML = guesses.toString();
    } else {
      alert('Just letters are allowed.');
    }
  });
}
