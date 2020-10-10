
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
  }

  updateCurrentScore() {
   var allScores =  this.frames.map((frame) => frame.score)
   console.log(allScores)
   this.totalScore = allScores.reduce((a,b) => a + b )
  }

}