input.onButtonPressed(Button.A, function () {
    let x = 0
    led.plot(x, 1)
})
for (let x = 0; x <= 4; x++) {
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
}
