var ready = false

var canvas, context

var stop = false

/*var img = document.createElement('img')
img.onload = function () {
    ready = true
    console.log("voulnerability found !")
}
img.src = './anonymous.png'*/

window.onload = () => {
    console.log("VIRUS !!")

    setTimeout(color, 200);
}

window.onclick = () => {
    if(!stop) {
        window.open("index.html", '_blank', 'location=yes,height=500,width=500,scrollbars=yes,status=yes')
    }
}

function color() {
    var x = Math.floor(Math.random() * 256)
    var y = Math.floor(Math.random() * 256)
    var z = Math.floor(Math.random() * 256)
    var bgColor = "rgb(" + x + "," + y + "," + z + ")"
    document.getElementById("text").style.color = bgColor

    /*if(ready) {
        context.drawImage(img, Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 20, 15)
        console.log("Hacked !")
    }*/

    
    if(document.getElementById("prog").value >= 100) {
        if(!stop) {
            document.getElementById("text").textContent = "YOU HAVE BEEN HACKED"

            setTimeout(color, 100);
        }

        setTimeout(() => {
            stop = true
            document.getElementById("text").textContent = "THIS WAS A JOKE"
            document.getElementById("text2").textContent = "DONT PANIC AND KEEP CALM !"
        }, 2000)
    } else {
        document.getElementById("prog").value += 5

        setTimeout(color, 100);
    }

}
