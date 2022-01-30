


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: 7,
  prevGuesses: [],
  play: function() {
    
    
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
      while(this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum){

          this.prevGuesses.push(this.getGuess())
          this.render()
      }




      // console.log(this.prevGuesses)
      // console.log(this.secretNum)
      // if(newNum !== this.secretNum){
      //   this.prevGuesses.push(newNum)
      //   console.log(this.prevGuesses)
      // }
      
      

      
      
      
  },
  getGuess: function(){
    let guess
    while(isNaN(guess) || guess <= this.smallestNum || guess >= this.biggestNum){
    guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))}
    
    return guess
  }, 
  
  render: function(){
    if(this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){ 
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length}!`)

    } else if(this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum){
      alert(`Too High!`)
    } else{
      alert(`Too Low!`)
    }
  }
  
} 
// console.log(game.play)
console.log(game.prevGuesses)
game.play()

// while (newNum !== this.secretNum){
//         this.prevGuesses.push(newNum){ return `Your guess`
          
      //   } (newNum === this.secretNum){
      //     return `Congrats! You guessed the number in ${prevGuesses.length}!`
      //   }; 
        
      // }