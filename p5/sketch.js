const config = {
  VIEW_WIDTH: 1800,
  VIEW_HEIGHT: 900,
  FRAME_RATE: 60,

  PANNING_DETECT_WIDTH: 20,
  PANNING_SPEED: 5,
  dx: 1,
}

const myImages = {}

function setup() {
  createCanvas(config.VIEW_WIDTH, config.VIEW_HEIGHT)
  frameRate(config.FRAME_RATE)

  loadImages()
}

function loadImages() {
  myImages.rangeCircle = loadImage("./assets/slimeball.png")
  myImages.mushroom_Red = loadImage("./assets/mushroom_red.png")
  myImages.snowball_Selected = loadImage("./assets/snowball_selected.png")
}

function draw() {
  drawView() //draw
  handleInput() //user
  updateModel() //

  // d.monkes.forEach((m) => {
  //   d.bloons.filter((b) => {
  //     return console.log(calcDistance(m, b) <= m.range)
  //   })
  // })

  if (d.bloons.length > 0) {
    console.log(d.bloonsInRange)
  }

  if (d.ui.dragging == true) {
    d.draggingMonke.x = mouseX
    d.draggingMonke.y = mouseY
  }

  // if (d.path.length <= 47) {
  //   if (frameCountElapsed(d.lastPathCreated) >= 1) {
  //     if (d.bloons.length > 0) createPath(d.bloons[0].x, d.bloons[0].y)

  //     d.lastPathCreated = frameCount
  //   }
  // }
}

function keyPressed() {}

function mousePressed() {
  if (d.ui.dragging) {
    d.ui.dragging = false
    monke()
    d.draggingMonke = null
  }
}

function handleInput() {
  handleKeyboard()
}

function keyTyped() {
  if (!d.ui.dragging) {
    if (key === "a") {
      d.ui.dragging = true
      createDraggingMonke(mouseX, mouseY)
    }
  }
}

function updateModel() {
  d.bloons.forEach((b) => {
    b.updateCoords()
  })

  clearBloons()
  checkBloonsInRange()
  moveDart()
}

function clearBloons() {
  d.bloons = d.bloons.filter((b) => b.f < 4650)
}

function mouseStuff() {}
