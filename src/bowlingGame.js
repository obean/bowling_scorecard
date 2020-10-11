
class Game {
  //import { Frame } from './frame.js'
  constructor() {
    this.frames = new Array
    this.totalScore = 0
    this.currentFrame = new Frame
  }

  frameEnded() {
   return (this.currentFrame.shots.length == 2 || this.currentFrame.roundGetsBonus())
  }

  startNextFrame() {
    if(this.frameEnded()){
      this.frames.push(this.currentFrame)
      this.currentFrame = new Frame
    }
    if (this.frames.length > 2){this.addBonusScores()}
  }

  updateCurrentScore() {
   var allScores =  this.frames.map((frame) => frame.score)

   this.totalScore = allScores.reduce((a,b) => a + b )
  }

  addBonusScores() {
    if(this.frames[this.frames.length-3].strike == true && this.frames[this.frames.length-3].bonusAdded == false ){
      var followingRolls = this.frames[this.frames.length-2].shots.concat(this.frames[this.frames.length-1].shots)
      var pointsToAdd = followingRolls[0] + followingRolls[1]
      this.frames[this.frames.length-3].score += pointsToAdd
      this.frames[this.frames.length-3].bonusAdded = true
    }else if(this.frames[this.frames.length-3].spare == true && this.frames[this.frames.length-2].bonusAdded == false){
      var pointsToAdd = this.frames[this.frames.length-2].shots[0]
      console.log("to Add = " + this.frames[this.frames.length-2].shots[0])
      this.frames[this.frames.length-3].score += pointsToAdd
      this.frames[this.frames.length-3].bonusAdded = true
    }

  }

}