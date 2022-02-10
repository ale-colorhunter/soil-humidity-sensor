basic.clearScreen()
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(100)
    serial.writeValue("value", pins.analogReadPin(AnalogPin.P0))
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P0) > 100) {
        basic.showString("TOO MUCH WATER")
    } else {
        basic.showIcon(IconNames.Yes)
    }
    basic.pause(100)
})
