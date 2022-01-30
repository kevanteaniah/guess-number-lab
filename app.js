
console.log(
  "Exercise 9 Result:\n",
  stringsLongerThan(["say", "goodnight", "whenever", "you", "like"], 3)  
)

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      if(guess !== this.secretNum){
        this.prevGuesses.push(guess)

      }
      if(guess === this.secretNum){
        return `Congrats! You guessed the number in ${prevGuesses.length}!`
      } else{
        this.prevGuesses.push(guess)
        return `Your guess`
      }
game.getGuess
      
      
      
  },
  getGuess: function(){
    let guess = 1;
    guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
    
  } 
  
  
} 


game.guess