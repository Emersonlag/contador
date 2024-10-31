input.onButtonPressed(Button.A, function () {
    Numero_de_Saltos += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Numero_de_Saltos)
})
input.onButtonPressed(Button.B, function () {
    Numero_de_Saltos += 1
})
let Numero_de_Saltos = 0
Numero_de_Saltos = 0
let Reversa = 10
basic.forever(function () {
    basic.showNumber(Reversa)
    basic.pause(100)
    Reversa += -1
})
