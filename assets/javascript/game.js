function randomNumber() {
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1

}

var wins = 0
var losses = 0
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19
console.log(targetNumber)
var total = 0

// var randomNumber = Math.floor(Math.random() * 1000)
function checker() {
    if (total > targetNumber) {
        alert("you lost")
        losses++
        $("#losses").text(losses)
        resetGame()
    } else if (total === targetNumber) {
        alert("you win")
        wins++
        $("#wins").text(wins)
        resetGame()

    }
    printHTML()

    console.log("loss", losses)
}



$("#total").text(total)
$("#target").text(targetNumber)
$("#wins").text(wins)
$("#losses").text(losses)

$("#button-one").val(randomNumber())
$("#button-two").val(randomNumber())
$("#button-three").val(randomNumber())
$("#button-four").val(randomNumber())


$("#button-one").on("click", function () {
    total += Number($("#button-one").val())
    console.log($("#button-one").val())
    console.log(total)
    checker()
    // $("#total").text(total)
})
$("#button-two").on("click", function () {
    total += Number($("#button-two").val())
    console.log($("#button-two").val())
    console.log(total)
    checker()
    // $("#total").text(total)
})
$("#button-three").on("click", function () {
    total += Number($("#button-three").val())
    console.log($("#button-three").val())
    console.log(total)
    checker()
    // $("#total").text(total)
})
$("#button-four").on("click", function () {
    total += Number($("#button-four").val())
    console.log($("#button-four").val())
    console.log(total)
    checker()
    // $("#total").text(total)
})

function printHTML() {
    $("#wins").text(wins)
    $("#losses").text(losses)
    $("#total").text(total)
    $("#target").text(targetNumber)

}

function resetGame() {

    targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19
    total = 0
    console.log(computerLetter)
    console.log("reset Game FUnction")
    printHTML()
}

