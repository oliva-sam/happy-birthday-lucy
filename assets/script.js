console.log("Happy Birthday Lucy! Hope you enjoy my little project")
$("#Lucy-Area").attr("style", "display : none")

var nicething =""
var characterics = [
    "Your hair looks beautiful today.",
    "Keep smiling, Lucy Lou.",
    '"Crying is for plain women. \n Pretty women go shopping." \n -Blanche',
    '"What the flip!"',
    "Hope your day is as amazing as you.", 
    '"Ah fudge!"', 
    "You're so stinkin' cute!", 
    "Life is tough but so are you.", 
    "You're the rainbow in my clouds.", 
    "Lucy, Lucy!",
    "Cute shoes!", 
    "Thank you for being you.", 
    "You can't do everything, but you can do anything.",
    "Friends are the sunshine of life.",
    "You're my lobster.",
    '"They say nothing lasts; dreams change, trends come and go, but friendships never go out of style." -Carrie',
    "*virtual hug 💕*"
]

$("#clickPresent").on("click", function() {
    showSomethingNice()
})

function showSomethingNice() {
    for (i = 0; i < characterics.length; i++) {
        var oneCharacteristics = Math.floor(Math.random() * characterics.length)
        var thing = characterics[oneCharacteristics]
        nicething = thing
        $("#niceAttribute").text(nicething)
        $("#Lucy-Area").attr("style", "display : block")
    }

}