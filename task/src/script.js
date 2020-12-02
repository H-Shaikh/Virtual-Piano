document.addEventListener("keydown", function (event) {

    if (event.code === "KeyA") {
        console.log(" A key is pressed.");
      let audio = new Audio("keys/A.mp3");
        audio.play();
    }
    else if (event.code === "KeyS") {
        console.log("S key is pressed.");
     let audio = new Audio( "keys/S.mp3");
         audio.play();
    }
    else if (event.code === "KeyD") {
        console.log("D key is pressed.");
        let audio = new Audio( "keys/D.mp3");
        audio.play();
    }
    else if (event.code === "KeyF") {
        console.log("F key is pressed.");
        let audio = new Audio( "keys/F.mp3");
        audio.play();
    }
    else if (event.code === "KeyG") {
        console.log("G key is pressed.");
        let audio = new Audio( "keys/G.mp3");
        audio.play();
    }
    else if (event.code === "KeyH") {
        console.log("H key is pressed.");
        let audio = new Audio( "keys/H.mp3");
        audio.play();
    }
    else if (event.code === "KeyJ") {
        console.log("J key is pressed.");
        let audio = new Audio( "keys/J.mp3");
        audio.play();
    }
    else if (event.code === "KeyW") {
        console.log("W key is pressed.");
        let audio = new Audio( "keys/W.mp3");
        audio.play();
    }
    else if (event.code === "KeyE") {
        console.log("E key is pressed.");
        let audio = new Audio( "keys/E.mp3");
        audio.play();
    }
    else if (event.code === "KeyT") {
        console.log("T key is pressed.");
        let audio = new Audio( "keys/T.mp3");
        audio.play();
    }
    else if (event.code === "KeyY") {
        console.log("Y key is pressed.");
        let audio = new Audio( "keys/Y.mp3");
        audio.play();
    }
    else if (event.code === "KeyU") {
        console.log("U key is pressed.");
        let audio = new Audio( "keys/U.mp3");
        audio.play();
    }
    else {
        console.log("warning!");
        alert("wrong key");
    }
});