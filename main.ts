input.onButtonPressed(Button.A, function () {
    A_press += 1
})
input.onButtonPressed(Button.B, function () {
    B_press += 1
})
input.onGesture(Gesture.Shake, function () {
    A_press = 0
    B_press = 0
})
let B_press = 0
let A_press = 0
music.setVolume(127)
basic.showString("Who Can Press Faster!")
basic.forever(function () {
    if (A_press == 15) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.InBackground)
        basic.showString("A Team Wins")
    }
    if (B_press == 15) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        basic.showString("B Team Wins")
    }
})
