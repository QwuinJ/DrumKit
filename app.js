const noises = {
  clap: new Audio("sounds/clap.wav"),
  hiHat: new Audio("sounds/hihat.wav"),
  kick: new Audio("sounds/kick.wav"),
  openHat: new Audio("sounds/openhat.wav"),
  boom: new Audio("sounds/boom.wav"),
  ride: new Audio("sounds/ride.wav"),
  snare: new Audio("sounds/snare.wav"),
  tom: new Audio("sounds/tom.wav"),
  tink: new Audio("sounds/tink.wav"),
};

// change to switch case

document.addEventListener("keypress", function(event) {
  sound(event.key);
})

function sound(key){
  switch(key) {
    case "a":
      console.log("pushed");
      noises.clap.play();
      break;
    case "s":
      noises.hiHat.play();
      break;
    case "d":
      noises.kick.play();
      break;
    case "f":
      noises.openHat.play();
      break;
    case "g":
      noises.boom.play();
      break;
    case "h":
      noises.ride.play();
      break;
    case "j":
      noises.snare.play();
      break;
    case "k":
      noises.tom.play();
      break;
    case "l":
      noises.tink.play();
      break;
  }
}

// document.addEventListener("keypress", (event) => {
//   if (event.key == "a") {
//     noises.clap.play();
//   } else if (event.key == "s") {
//     noises.hiHat.play();
//   } else if (event.key == "d") {
//     noises.kick.play();
//   } else if (event.key == "f") {
//     noises.openHat.play();
//   } else if (event.key == "g") {
//     noises.boom.play();
//   } else if (event.key == "h") {
//     noises.ride.play();
//   } else if (event.key == "j") {
//     noises.snare.play();
//   } else if (event.key == "k") {
//     noises.tom.play();
//   } else if (event.key == "l") {
//     noises.tink.play();
//   }
// });

// add event listeners for onclick

let allKeys = document.querySelectorAll("button");

for (let i= 0; i < allKeys.length; i++) {
  allKeys[i].addEventListener("click", function () {
    console.log("clicked")
  });
}
