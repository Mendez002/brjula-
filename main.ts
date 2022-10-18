input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() == 45) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (input.compassHeading() == 90) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() == 135) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (input.compassHeading() == 180) {
        basic.showArrow(ArrowNames.South)
    } else if (input.compassHeading() == 225) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (input.compassHeading() == 270) {
        basic.showArrow(ArrowNames.West)
    } else if (input.compassHeading() == 315) {
        basic.showArrow(ArrowNames.NorthEast)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
