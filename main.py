def on_button_pressed_a():
    x = 0
    led.plot(x, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_leds("""
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)