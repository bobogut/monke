function checkBloonsInRange() {
  if (d.bloons.length > 0) {
    d.monkes.forEach((m) => {
      d.bloons.filter((b) => {
        return d.bloonsInRange.push(console.log(calcDistance(b, m) <= m.range))
      })
    })
  }
}

function shootDart() {
  if (d.monkes.length > 0) {
    createDart(d.monkes[0].x, d.monkes[0].y)
  }

  // d.darts[0].o = calculateAngle(d.darts[0], d.monkes[1])
}

function moveDart() {
  d.bloons.forEach((b) => {
    d.darts.forEach((d) => {
      d.x = d.x + d.sp * (b.x > d.x ? 1 : -1)
      d.y = d.y + d.sp * (b.y > d.y ? 1 : -1)
    })
  })
}
