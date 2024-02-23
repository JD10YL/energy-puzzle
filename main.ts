scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile5`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0 && mySprite.vx == 0) {
        mySprite.setVelocity(0, -75)
        info.player2.changeScoreBy(1)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0 && mySprite.vx == 0) {
        if (info.score() < 30) {
            tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
            for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
                tiles.setTileAt(value, assets.tile`myTile2`)
            }
            info.setScore(0)
            info.player2.setScore(0)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0 && mySprite.vx == 0) {
        mySprite.setVelocity(-75, 0)
        info.player2.changeScoreBy(1)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0 && mySprite.vx == 0) {
        mySprite.setVelocity(75, 0)
        info.player2.changeScoreBy(1)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0 && mySprite.vx == 0) {
        mySprite.setVelocity(0, 75)
        info.player2.changeScoreBy(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile4`)
    info.changeScoreBy(5)
})
let level2 = ""
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . 2 2 2 2 
    2 2 2 2 2 
    2 2 f f f 
    2 1 f 1 f 
    2 f f f f 
    . f f f f 
    . f . . f 
    `, SpriteKind.Player)
tiles.setSmallTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
let level = 1
let levelCompleted = "Level completed!"
blockSettings.writeNumber("Overall Score", 0)
game.showLongText("Gather the Charges!                                          " + Credits.credit("ROYAL LIZARD"), DialogLayout.Full)
game.showLongText("How to play: Navigate the Humis to the 6 charges on each level. Remember, the more moves you make, the lower your finishing score is. Caution, some levels can only be completed if the initial moves are made correctly. All levels are able to be - and have been - beaten. Press 'B' to restart your current level. Enjoy!", DialogLayout.Full)
game.splash("Level 1")
forever(function () {
    level2 = "Level " + (level + 1)
    if (level == 1 && info.score() == 30) {
        mySprite.setVelocity(0, 0)
        blockSettings.writeNumber("Overall Score", blockSettings.readNumber("Overall Score") + (info.score() - info.player2.score()))
        info.setScore(0)
        info.player2.setScore(0)
        music.powerUp.play()
        game.splash(levelCompleted)
        game.splash(level2)
        level += 1
        tiles.setSmallTilemap(tilemap`level4`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    }
    if (level == 2 && info.score() == 30) {
        mySprite.setVelocity(0, 0)
        blockSettings.writeNumber("Overall Score", blockSettings.readNumber("Overall Score") + (info.score() - info.player2.score()))
        info.setScore(0)
        info.player2.setScore(0)
        music.powerUp.play()
        game.splash(levelCompleted)
        game.splash(level2)
        level += 1
        tiles.setSmallTilemap(tilemap`level7`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    }
    if (level == 3 && info.score() == 30) {
        mySprite.setVelocity(0, 0)
        blockSettings.writeNumber("Overall Score", blockSettings.readNumber("Overall Score") + (info.score() - info.player2.score()))
        info.setScore(0)
        info.player2.setScore(0)
        music.powerUp.play()
        game.splash(levelCompleted)
        game.splash(level2)
        level += 1
        tiles.setSmallTilemap(tilemap`level9`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    }
    if (level == 4 && info.score() == 30) {
        mySprite.setVelocity(0, 0)
        blockSettings.writeNumber("Overall Score", blockSettings.readNumber("Overall Score") + (info.score() - info.player2.score()))
        info.setScore(0)
        info.player2.setScore(0)
        music.powerUp.play()
        game.splash(levelCompleted)
        game.splash(level2)
        level += 1
        tiles.setSmallTilemap(tilemap`level11`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    }
    if (level == 5 && info.score() == 30) {
        mySprite.setVelocity(0, 0)
        blockSettings.writeNumber("Overall Score", blockSettings.readNumber("Overall Score") + (info.score() - info.player2.score()))
        info.setScore(0)
        info.player2.setScore(0)
        music.powerUp.play()
        game.splash(levelCompleted)
        game.splash(level2)
        level += 1
        tiles.setSmallTilemap(tilemap`level13`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    }
    if (level == 6 && info.score() == 30) {
        mySprite.setVelocity(0, 0)
        blockSettings.writeNumber("Overall Score", blockSettings.readNumber("Overall Score") + (info.score() - info.player2.score()))
        info.setScore(0)
        info.player2.setScore(0)
        music.powerUp.play()
        game.splash(levelCompleted)
        game.splash(level2)
        level += 1
        tiles.setSmallTilemap(tilemap`level15`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    }
    if (level == 7 && info.score() == 30) {
        mySprite.setVelocity(0, 0)
        blockSettings.writeNumber("Overall Score", blockSettings.readNumber("Overall Score") + (info.score() - info.player2.score()))
        info.setScore(0)
        info.player2.setScore(0)
        music.powerUp.play()
        game.splash(levelCompleted)
        game.splash(level2)
        level += 1
        tiles.setSmallTilemap(tilemap`level17`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    }
    if (level == 8 && info.score() == 30) {
        mySprite.setVelocity(0, 0)
        blockSettings.writeNumber("Overall Score", blockSettings.readNumber("Overall Score") + (info.score() - info.player2.score()))
        info.setScore(0)
        info.player2.setScore(0)
        music.powerUp.play()
        game.splash(levelCompleted)
        game.splash(level2)
        level += 1
        tiles.setSmallTilemap(tilemap`level19`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    }
    if (level == 9 && info.score() == 30) {
        mySprite.setVelocity(0, 0)
        blockSettings.writeNumber("Overall Score", blockSettings.readNumber("Overall Score") + (info.score() - info.player2.score()))
        info.setScore(0)
        info.player2.setScore(0)
        music.powerUp.play()
        game.splash(levelCompleted)
        game.splash(level2)
        level += 1
        tiles.setSmallTilemap(tilemap`level21`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    }
    if (level == 10 && info.score() == 30) {
        mySprite.setVelocity(0, 0)
        blockSettings.writeNumber("Overall Score", blockSettings.readNumber("Overall Score") + (info.score() - info.player2.score()))
        info.setScore(0)
        info.player2.setScore(0)
        music.powerUp.play()
        game.splash("Final level complete!", "You're fully charged!")
        game.splash("Your score: " + blockSettings.readNumber("Overall Score"))
        info.setScore(blockSettings.readNumber("Overall Score"))
        game.over(true)
    }
})
