let variable = 0
basic.forever(function () {
    let distancia = 0
    variable = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.showString("distancia")
    if (distancia < 60) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 15)
        basic.pause(5000)
    }
    if (distancia < 10) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(500)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
