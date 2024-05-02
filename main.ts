input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Ghost)
    basic.pause(2000)
    music.play(music.stringPlayable("C5 B A G G A B C5 ", 120), music.PlaybackMode.UntilDone)
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Skull)
    basic.pause(2000)
    music.play(music.stringPlayable("C D E F F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.pause(5000)
})
radio.onReceivedStringDeprecated(function (receivedString) {
    item = receivedString
    if (item.compare("A") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M2, -255)
    } else if (item.compare("B") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
    } else if (item.compare("C") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M4, 180)
    } else if (item.compare("D") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M4, -180)
    } else if (item.compare("0") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
        SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
        SuperBit.MotorRun(SuperBit.enMotors.M4, 0)
    } else if (item.compare("E") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    } else if (item.compare("F") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    } else if (item.compare("G") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    } else if (item.compare("H") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    }
})
let item = ""
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Rabbit)
basic.pause(2000)
basic.showString("Hello! I am arm robot! And you?")
