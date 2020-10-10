class Frame {
  constructor() {
    this.strike = false;
    this.spare = false;
    this.shots = new Array;
    this.score = 0;
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
  }
}
//module.exports = Frame