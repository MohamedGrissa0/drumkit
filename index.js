var btns = document.querySelectorAll("button")
var h1 = document.querySelector("h1")
for (var i = 0; i < btns.length; i++) {
    var b = btns[i].innerHTML
    btns[i].addEventListener("click", function () {
        var btninner = this.innerHTML
        switch (btninner) {
            case "w":
                var a = new Audio("sounds/crash.mp3")
                a.play()
              this.classList.add("pressed")
              setTimeout(() => {
                this.classList.remove("pressed")
              }, 1000);
              break;
            case "a":
                var a = new Audio("sounds/kick-bass.mp3")
                a.play()
                this.classList.add("pressed")
              setTimeout(() => {
                this.classList.remove("pressed")
              }, 1000);
                break;

            case "s":
                var a = new Audio("sounds/snare.mp3")
                a.play()
                this.classList.add("pressed")
              setTimeout(() => {
                this.classList.remove("pressed")
              }, 1000);
                break;

            case "d":
                var a = new Audio("sounds/tom-1.mp3")
                a.play()
                this.classList.add("pressed")
              setTimeout(() => {
                this.classList.remove("pressed")
              }, 1000);
                break;

            case "j":
                var a = new Audio("sounds/tom-2.mp3")
                a.play()
                this.classList.add("pressed")
              setTimeout(() => {
                this.classList.remove("pressed")
              }, 1000);
                break;

            case "g":
                var a = new Audio("sounds/tom-3.mp3")
                a.play()
                this.classList.add("pressed")
              setTimeout(() => {
                this.classList.remove("pressed")
              }, 1000);
                break;

            case "b":
                var a = new Audio("sounds/tom-4.mp3")
                a.play()
                this.classList.add("pressed")
              setTimeout(() => {
                this.classList.remove("pressed")
              }, 1000);
                break;
            default : console.log("ba3")
        }
    });

}
document.addEventListener("keypress", function (event) {
    var  active = document.querySelector("."+event.key)
    if (event.key === "w") {
        var a = new Audio("sounds/crash.mp3")
        a.play()
        active.classList.add("pressed")
              setTimeout(() => {
                active.classList.remove("pressed")
              }, 500);
    }
    else if (event.key === "a") {
        var a = new Audio("sounds/kick-bass.mp3")
        a.play()
        active.classList.add("pressed")
              setTimeout(() => {
                active.classList.remove("pressed")
              }, 500);
    }
    else if (event.key === "s") {
        var a = new Audio("sounds/snare.mp3")
        a.play()
        active.classList.add("pressed")
              setTimeout(() => {
                active.classList.remove("pressed")
              }, 500);
    } 
    else if (event.key === "d") {
        var a = new Audio("sounds/tom-1.mp3")
        a.play()
        active.classList.add("pressed")
              setTimeout(() => {
                active.classList.remove("pressed")
              }, 500);
    }
    else if (event.key === "j") {
        var a = new Audio("sounds/tom-2.mp3")
        a.play()
        active.classList.add("pressed")
              setTimeout(() => {
                active.classList.remove("pressed")
              }, 500);
    }
    else if (event.key === "g") {
        var a = new Audio("sounds/tom-3.mp3")
        a.play()
        active.classList.add("pressed")
              setTimeout(() => {
                active.classList.remove("pressed")
              }, 500);
    }
    else if (event.key === "b") {
        var a = new Audio("sounds/tom-4.mp3")
        a.play()
        active.classList.add("pressed")
              setTimeout(() => {
                active.classList.remove("pressed")
              }, 500    );
    }
    else {
        alert('8alt ya weldi')
    }
})




