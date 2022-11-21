music.setBuiltInSpeakerEnabled(true)
let låst = true
OLED.init(128, 64)
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P0) && låst == true) {
        basic.pause(2000)
        music.setVolume(255)
        music.playTone(880, music.beat(BeatFraction.Breve))
    }
})
basic.forever(function () {
    OLED.clear()
    if (låst) {
        OLED.writeStringNewLine("laast")
    } else {
        OLED.writeStringNewLine("AAben")
    }
})
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P1)) {
        låst = true
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P1)) {
        låst = false
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        låst = true
    }
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P0)) {
        låst = true
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
        låst = true
    }
})
basic.forever(function () {
    while (låst == false) {
        music.stopAllSounds()
    }
})
