let låst = true
OLED.init(128, 64)
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P0) && låst) {
        music.playTone(880, music.beat(BeatFraction.Breve))
    }
})
basic.forever(function () {
    OLED.clear()
    if (låst) {
        OLED.writeStringNewLine("låst")
    } else {
        OLED.writeStringNewLine("åben")
    }
})
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P1)) {
        låst = true
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P1)) {
        låst = false
    }
})
