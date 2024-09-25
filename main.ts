function checkWin (stage: number) {
    if (level == stage) {
        level = level + 1
        if (level == 6) {
            music.play(music.stringPlayable("E F D A F C5 B C5 ", 120), music.PlaybackMode.UntilDone)
        } else {
            basic.showNumber(level)
        }
    } else {
        reset()
    }
}
input.onButtonPressed(Button.A, function () {
    checkWin(0)
})
input.onGesture(Gesture.ScreenDown, function () {
    checkWin(5)
})
input.onSound(DetectedSound.Loud, function () {
    checkWin(4)
})
input.onButtonPressed(Button.AB, function () {
    checkWin(1)
})
input.onButtonPressed(Button.B, function () {
    checkWin(0)
})
input.onGesture(Gesture.Shake, function () {
    checkWin(2)
})
input.onGesture(Gesture.LogoDown, function () {
    checkWin(3)
})
function reset () {
    if (level != 6) {
        level = level - 1
        basic.showNumber(level)
    }
}
let level = 0
basic.showNumber(0)
level = 0
input.setSoundThreshold(SoundThreshold.Loud, 200)
basic.forever(function () {
    if (level == 6) {
        basic.showString("Winner")
    }
})
