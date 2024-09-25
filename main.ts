input.onButtonPressed(Button.A, function () {
    if (level == 0) {
        level = 1
        basic.showNumber(level)
    } else {
        reset()
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    if (level == 5) {
        level = 6
        music.play(music.stringPlayable("E F D A F C5 B C5 ", 120), music.PlaybackMode.UntilDone)
    } else {
        reset()
    }
})
input.onSound(DetectedSound.Loud, function () {
    if (level == 4) {
        level = 5
        basic.showNumber(level)
    } else {
        reset()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (level == 1) {
        level = 2
        basic.showNumber(level)
    } else {
        reset()
    }
})
input.onButtonPressed(Button.B, function () {
    if (level == 0) {
        level = 1
        basic.showNumber(level)
    } else {
        reset()
    }
})
input.onGesture(Gesture.Shake, function () {
    if (level == 2) {
        level = 3
        basic.showNumber(level)
    } else {
        reset()
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (level == 3) {
        level = 4
        basic.showNumber(level)
    } else {
        reset()
    }
})
function reset () {
    if (level != 6) {
        level = 0
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
