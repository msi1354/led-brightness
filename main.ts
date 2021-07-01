input.onButtonPressed(Button.A, function () {
    led.plot(index, 2)
})
let x = 0
let index = 0
index = x
for (let x = 0; x <= 4; x++) {
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
}
