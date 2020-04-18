input.onButtonPressed(Button.A, function () {
    radio.sendNumber(Math.randomRange(0, 10))
})
radio.setGroup(1)
