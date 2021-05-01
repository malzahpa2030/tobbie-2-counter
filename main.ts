function SetCounter () {
    basic.showString("COUNTER ACTIVATED")
    counter = 0
    basic.showNumber(counter)
}
input.onButtonPressed(Button.A, function () {
    counter += 1
    basic.showNumber(counter)
})
function Notifications () {
    if (5 == counter) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        basic.showString("5 COUNTED")
    } else if (10 == counter) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        basic.showString("10 COUNTED")
    } else if (50 == counter) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        basic.showString("50 COUNTED")
    } else if (100 == counter) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        basic.showString("100 COUNTED")
    }
}
input.onButtonPressed(Button.AB, function () {
    counter = 0
    basic.showString("COUNTER RESETED")
    basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter += -1
    basic.showNumber(counter)
})
let counter = 0
SetCounter()
basic.forever(function () {
    Notifications()
})
