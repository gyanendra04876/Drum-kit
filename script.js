

window.addEventListener("keydown",function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("key1");
    
});


let keys = document.querySelectorAll(".key");

keys.forEach((key) => {
    key.addEventListener("transitionend",function(a){
        if(a.propertyName !== "transform") return;
        key.classList.remove("key1");
    });
});

// let keys = document.querySelector("div");

//     keys.addEventListener("transitionend",function(a){
//         if(a.propertyName !== "transform") return;
//         keys.classList.remove("key1");
//     });
