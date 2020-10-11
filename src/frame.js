class Frame {
  constructor() {
    this.strike = false;
    this.spare = false;
    this.shots = new Array;
    this.score = 0;
    this.bonusAdded = false
  };

  newShot(score) {
    this.shots.push(score)
  }

  bonusAttributer() {
    if(this.shots[0] == 10) { this.strike = true
    }else if(this.shots.reduce((a,b) => a + b) == 10 && this.shots.length == 2){ this.spare = true}
  }

  roundGetsBonus() {
    return (this.strike || this.spare)
  }

  frameScoreCalculator() {
   this.score = this.shots.reduce((a,b) => a + b)
   // var accum = 0
    // for(var i = 0; i = this.score.length-1; i++){
    //   this.score += this.shots[i]
    // }
  }
}
//module.exports = Frame