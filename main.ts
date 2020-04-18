input.onButtonPressed(Button.A, function () {
    radio.sendNumber(Math.randomRange(0, 9))
})
radio.setGroup(1)
