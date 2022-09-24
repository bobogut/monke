function createMonke(x, y) {
  d.monkes.push({
    type: "monke",
    x,
    y,
    s: 100,
    f: 0,
    range: 100,

    frameCount: 0,
    image: true,
  })
}

function createDraggingMonke(x, y) {
  d.draggingMonke = {
    type: "monke",
    x,
    y,
    o: 0,
    s: 100,
    f: 0,

    frameCount: 0,
    image: true,
  }
}

function createBloon(x, y, path) {
  d.bloons.push({
    type: "bloon",
    x,
    y,
    s: 100,
    f: 0,
    sp: 5,
    // pathX: null,
    // pathY: null,

    frameCount: 0,
    image: true,

    updateCoords: function () {
      this.x = path.calcX(this.f)
      this.y = path.calcY(this.f)
      this.f = this.f + this.sp
    },
  })
}

function createDart(x, y) {
  d.darts.push({
    type: "dart",
    x,
    y,
    o: 0,
    s: 50,
    sp: 5,

    frameCount: 0,
    image: true,
  })
}
