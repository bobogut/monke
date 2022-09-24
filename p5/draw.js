function drawView() {
  background(176, 255, 221)
  drawMonke()
  drawDraggingMonke()
  drawBloon()
  drawDart()
}

function drawMonke() {
  d.monkes.forEach((m) => {
    myImages.rangeCircle.resize(m.s, m.s)

    drawCharacter(m)
  })
}

function drawDraggingMonke() {
  if (d.draggingMonke != null) {
    myImages.rangeCircle.resize(d.draggingMonke.s, d.draggingMonke.s)

    drawCharacter(d.draggingMonke)
  }
}

function drawBloon() {
  d.bloons.forEach((b) => {
    myImages.mushroom_Red.resize(b.s, b.s)

    drawCharacter(b)
  })
}

function drawDart() {
  d.darts.forEach((d) => {
    myImages.snowball_Selected.resize(d.s, d.s)

    drawCharacter(d)
  })
}
