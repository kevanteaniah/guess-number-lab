


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: 7,
  prevGuesses: [],
  play: function() {
    this.getGuess()
    let newNum = this.getGuess()
    
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
      console.log(this.prevGuesses)
      console.log(this.secretNum)
      if(newNum !== this.secretNum){
        this.prevGuesses.push(newNum)
        
      }
      if(newNum === this.secretNum){
        console.log(this.prevGuesses)
        return `Congrats! You guessed the number in ${prevGuesses.length}!`
      } else{
        this.prevGuesses.push(newNum)
        return `Your guess`
      } 
      

      
      
      
  },
  getGuess: function(){
    let guess
    guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
    console.log(guess)
  }, 
  
  
} 
// console.log(game.play)
console.log(game.prevGuesses)
game.play()

// while (newNum !== this.secretNum){
      //   this.prevGuesses.push(newNum){ return `Your guess`
          
      //   } (newNum === this.secretNum){
      //     return `Congrats! You guessed the number in ${prevGuesses.length}!`
      //   }; 
        
      // }