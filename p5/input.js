function handleKeyboard() {
  if (frameCountElapsed(d.lastBloonCreated) >= 100) {
    if (keyIsDown(_KEYS.W)) {
      createBloon(0, 400, path3)
      d.lastBloonCreated = frameCount
      console.log("agea")
    }
  }
}

function monke() {
  createMonke(d.draggingMonke.x, d.draggingMonke.y)
}
