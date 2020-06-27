sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.ashes, 100)
    otherSprite.destroy()
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(6)
mySprite = sprites.create(img`
. . . . 1 1 1 1 1 1 1 . . . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . 
. 1 1 8 8 8 8 8 8 8 8 8 1 1 . . 
1 1 8 8 8 2 2 2 2 2 8 8 8 1 1 . 
1 1 8 8 2 2 2 5 2 2 2 8 8 1 1 . 
1 1 8 8 2 2 5 5 5 2 2 8 8 1 1 . 
1 1 8 8 2 2 2 5 2 2 2 8 8 1 1 . 
1 1 8 8 2 2 2 2 2 2 2 8 8 1 1 . 
1 1 8 8 8 2 2 2 2 2 8 8 8 1 1 . 
1 1 8 8 8 8 8 8 8 8 8 8 8 1 1 . 
. 1 1 8 8 8 8 8 8 8 8 8 1 1 . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(50)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
5 5 5 5 . . . . . . . . . . . . 
5 5 5 5 . . . . . . . . . . . . 
5 5 e e . . . . . . . . . . . . 
5 5 e e e . . . . . . . . . . . 
. . . e e e . . . . . . . . . . 
. . . . e e e . . . . . . . . . 
. . . . . e e e . . . . . . . . 
. . . . . . e e e . . . . . . . 
. . . . . . . e e e . . . . . . 
. . . . . . . . e e e 5 7 5 7 5 
. . . . . . . . . e e e 5 7 5 7 
. . . . . . . . . 5 e e e 5 7 5 
. . . . . . . . . 7 5 7 e e 5 7 
. . . . . . . . . 5 7 5 e e e 5 
. . . . . . . . . 7 5 7 5 e e e 
. . . . . . . . . 5 7 5 7 5 e e 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50))
})
