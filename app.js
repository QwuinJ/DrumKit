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

document.addEventListener("keypress", (event) => {
  if (event.key == "a") {
    noises.clap.play();
  } else if (event.key == "s") {
    noises.hiHat.play();
  } else if (event.key == "d") {
    noises.kick.play();
  } else if (event.key == "f") {
    noises.openHat.play();
  } else if (event.key == "g") {
    noises.boom.play();
  } else if (event.key == "h") {
    noises.ride.play();
  } else if (event.key == "j") {
    noises.snare.play();
  } else if (event.key == "k") {
    noises.tom.play();
  } else if (event.key == "l") {
    noises.tink.play();
  }
});
