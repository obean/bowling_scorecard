class specShortcut{
  static playAFrame(game ,shotOne, shotTwo = 0) {
    game.currentFrame.newShot(shotOne)
    if(shotTwo){game.currentFrame.newShot(4)}
    game.currentFrame.frameScoreCalculator()
    game.startNextFrame()
}}


describe('game', function(){
  beforeEach(function() {
    game = new Game
  })

  describe('frameEnded', function(){
    it('knows when the current frame is over when not a bonus round', function() {
      game.currentFrame.newShot(4)
      game.currentFrame.newShot(4)
      game.currentFrame.bonusAttributer();
      expect(game.frameEnded()).toEqual(true)
    })
    it('knows when the current frame has ended when a strike', function(){
      game.currentFrame.newShot(10)
      game.currentFrame.bonusAttributer()
      expect(game.frameEnded()).toEqual(true)
    })

    it('does not think frame has ended after one shot <10', function() {
      game.currentFrame.newShot(9);
      game.currentFrame.bonusAttributer()
      expect(game.frameEnded()).toEqual(false)
    })
  })

  describe('startNextFrame', function(){
    it('resets current frame when a frame ends', function() {
      var startFrame = game.currentFrame
      game.currentFrame.newShot(4)
      game.currentFrame.newShot(4)
      game.startNextFrame()
      expect(game.currentFrame).not.toEqual(startFrame)
    })
    it('adds the old frame to the frames array', function() {
      var startFrame = game.currentFrame
      game.currentFrame.newShot(4)
      game.currentFrame.newShot(4)
      game.startNextFrame()
      expect(game.frames[0]).toEqual(startFrame)
  
    })
    it('does nothing if the frame hasn\'t ended', function() {
      var startFrame = game.currentFrame
      game.currentFrame.newShot(4)
      game.startNextFrame()
      expect(game.frames.length).toEqual(0)
      expect(game.currentFrame).toEqual(startFrame)
    })
    it('works for consecutive frames', function() {
      game.currentFrame.newShot(4)
      game.currentFrame.newShot(4)
      game.startNextFrame()
      game.currentFrame.newShot(4)
      game.currentFrame.newShot(4)
      game.startNextFrame()
      expect(game.frames.length).toEqual(2)
    })
  })

  describe('updateCurrentScore', function() {
    it('adds the score after the last frame', function() {
      game.currentFrame.newShot(4)
      game.currentFrame.newShot(4)
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.updateCurrentScore()
      expect(game.totalScore).toEqual(8)
    })
    it('keeps track of scores over several frames', function() {
      // specShortcut.playAFrame(game,4,4)
      // console.log(game.frames)
      // specShortcut.playAFrame(game,10)
      // console.log(game.frames)   //i failed at importing functions to use as shortcuts here
      // specShortcut.playAFrame(game,6,3)
      // console.log(game.frames)
      // game.updateCurrentScore()
      // expect(game.totalScore).toEqual(27)
      game.currentFrame.newShot(4)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.currentFrame.newShot(4)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.currentFrame.newShot(4)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.updateCurrentScore()
      expect(game.totalScore).toEqual(24)
    })
    it('keeps track over multiple frames where zeros are in the mix(because the player sucks kinda bad', function() {
      game.currentFrame.newShot(4)
      if(5){game.currentFrame.newShot(0)}
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.currentFrame.newShot(4)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.currentFrame.newShot(0)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.updateCurrentScore()
      expect(game.totalScore).toEqual(16)
    })
  })
  describe('add bonus frame', function() {
    //this function will add abonus frame, we expect this to be a different class because its different. 
  })

})