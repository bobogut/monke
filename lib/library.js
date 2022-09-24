// standard method to draw chacter
function drawCharacter(object) {
  if (object.image) {
    drawCharacterWithImage(object)
  } else {
    drawCharacterUsingPoints(object)
  }
}

function drawCharacterWithImage(object) {
  var skins = getImageSkin(object)
  var i = Math.floor(object.frameCount % skins.length)
  object.frameCount = object.frameCount + 0.1

  push()
  translate(object.x, object.y)
  imageMode(CENTER)
  rotate((PI / 180) * object.o)
  image(skins[i], 0, 0)

  pop()
}

function drawCharacterUsingPoints(object) {
  var skin = getSkin(object)
  stroke(color(skin.color))
  // if multiline
  if (Array.isArray(skin.points[0])) {
    skin.points.forEach((p) => {
      drawShape(transformPoints(p, object))
    })
  }
  // if not multiline
  else {
    drawShape(transformPoints(skin.points, object))
  }
}

function frameCountElapsed(a) {
  return frameCount - a
}

function transformPoints(points, object) {
  var rotatedPoints = rotatePoints(points, object)
  var movedPoints = movePoints(rotatedPoints, object)
  return movedPoints
}
// move; {x: 123, y: 2313}
function movePoints(points, { x, y }) {
  var movedPoints = []
  for (var i = 0; i < points.length; i++) {
    movedPoints[i] = {
      x: points[i].x + x, // + d.panning.l,
      y: points[i].y + y, // - d.panning.u,
    }
  }
  return movedPoints
}

function rotatePoints(points, { o }) {
  if (o == null) o = 0

  var r = (o * Math.PI) / 180 // convert degrees to radians
  var rotatedPoints = []
  for (var i = 0; i < points.length; i++) {
    let { x, y } = points[i]
    rotatedPoints[i] = {
      x: x * Math.cos(r) - y * Math.sin(r),
      y: x * Math.sin(r) + y * Math.cos(r),
    }
  }
  return rotatedPoints
}

function rotatePoint(point, { o }) {
  var points = [point]
  var rotatedPoints = rotatePoints(points, o)
  return rotatedPoints[0]
}

function drawShape(points) {
  for (var i = 0; i < points.length; i++) {
    var p1 = points[i]
    var p2 = i == points.length - 1 ? points[0] : points[i + 1]
    line(p1.x, p1.y, p2.x, p2.y)
  }
}

// utilities
function removeItemById(items, { id }) {
  var itemIdx = -1
  for (var i = 0; i < items.length; i++) {
    var element = items[i]
    if (element.id === id) {
      itemIdx = i
      break
    }
  }

  if (itemIdx >= 0) items.splice(itemIdx, 1)
}

function findLowest(objArr) {
  var lowest = objArr[0]
  for (var i = 0; i < objArr.length; i++) {
    var o = objArr[i]
    if (lowest.health > o.health) {
      lowest = o
    }
  }
  return lowest
}

function calcDistance(p1, p2) {
  var a = p2.x - p1.x
  var b = p2.y - p1.y
  var dsquared = a * a + b * b
  return Math.sqrt(dsquared)
}

function calcDistance2(x0, y0, x, y) {
  var a = x - x0
  var b = y - y0
  var dsquared = a * a + b * b
  return Math.sqrt(dsquared)
}

function collided(p1, p2) {
  var d = calcDistance(p1, p2)
  return p1.s + p2.s >= 2 * d
}

function rand(max) {
  return Math.floor(Math.random() * max)
}

function moveWhenBumping(object) {
  object.forEach((o) => {
    object.forEach((o2) => {
      if (o.id == o2.id) {
        return
      }
      if (collided(o, o2)) {
        o2.x = o2.x + rand(5) - rand(5)
        o2.y = o2.y + rand(5) - rand(5)
      }
    })
  })
}

function calculateAngle(from, to) {
  var dy = to.y - from.y
  var dx = to.x - from.x
  var angle = from.x > to.x ? 270 : 90
  var a = Math.atan(dy / dx)
  return convertRadiansToDegrees(a) + angle
}

function convertRadiansToDegrees(rad) {
  return (rad / Math.PI) * 180
}

function convertDegToRadians(deg) {
  return (deg * Math.PI) / 180
}

function abs(x) {
  return x < 0 ? -x : x
}

function smaller(n1, n2) {
  if (n1 < n2) {
    return n1
  } else return n2
}

function bigger(n1, n2) {
  if (n1 > n2) {
    return n1
  } else return n2
}

function moveObjects(object) {
  object.forEach((o) => {
    o.x = moveX(o)
    o.y = moveY(o)
  })
}

function moveObject(o) {
  o.x = moveX(o)
  o.y = moveY(o)
}

function moveX(b) {
  // return b.x + Math.sin((b.o * Math.PI) / 180) * b.sp
  return b.x + delta_fx(b.o, b.sp)
}

function delta_fx(o, sp) {
  return Math.sin((o * Math.PI) / 180) * sp
}

function moveY(b) {
  return b.y - Math.cos((b.o * Math.PI) / 180) * b.sp
}

// keyboard input
var _KEYS = {
  ESC: 27,
  ENTER: 13,
  E: 69,
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,
  0: 58,
  CAPS: 20,

  W: 87,
  A: 65,
  S: 83,
  D: 68,
  F: 70,

  UP_ARROW: 38,
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  SHIFT: 16,
  PLUS: 187,
  MINUS: 189,

  LEVEL_UP: 67,
}

// function drawMultiLineCharacter(object) {
//   var pointsArray = object.createPointsArr()
//   pointsArray.forEach((points) => {
//     stroke(color(object.color))
//     drawShape(transformPoints(points, object))
//   })
// }

// function drawMultiLineCharacterWithColor(object) {
//   var pointsWithColorArr = object.createPointsMultiLineWithColor()
//   pointsWithColorArr.forEach((pointsWithColor) => {
//     stroke(color(pointsWithColor.color))
//     var points = pointsWithColor.points
//     drawShape(transformPoints(points, object))
//   })
// }

// function fireNewBullet(object, a) {
//   if (a == 1) {
//     object.ammo = object.ammo - 1
//     var bullet = createBulletModel(object, -50)
//     d.bullets.push(bullet)
//   }
// }

// class CharacterPath {
//   constructor(path, delta) {
//     this.x = path[0].x
//     this.y = path[0].y
//     this.path = path
//     this.delta = delta
//     this.counter = 0
//   }

//   betweenPoints(p0, p1, x, y) {
//     return (
//       (2 * p0.x - x - p1.x) * (x - p1.x) + (2 * p0.y - y - p1.y) * (y - p1.y) >
//       0
//     )
//   }

//   *iterator() {
//     for (var i = 0; i < this.path.length - 1; i++) {
//       var p0 = this.path[i]
//       var p1 = this.path[i + 1]
//       var dirX = p0.x < p1.x ? 1 : -1
//       var dirY = p0.y < p1.y ? 1 : -1
//       var m = (p1.y - p0.y) / (p1.x - p0.x)
//       var o = Math.atan(m)
//       while (this.betweenPoints(p0, p1, this.x, this.y)) {
//         if (m === 0) {
//           this.x += this.delta * dirX
//         } else if (!isFinite(m)) {
//           this.y += this.delta * dirY
//         } else {
//           this.x += this.delta * Math.cos(o) * dirX
//           this.y = (this.x - p0.x) * m + p0.y
//         }
//         yield { x: this.x, y: this.y }
//       }
//     }
//   }
// }

// function drawLines(points) {
//   for (var i = 0; i < points.length - 1; i++) {
//     var p0 = points[i]
//     var p1 = points[i + 1]
//     line(p0.x, p0.y, p1.x, p1.y)
//   }
// }

// function mouseDragged() {
//   if (d.path.length == 0) {
//     var p = {
//       x: mouseX,
//       y: mouseY,
//     }
//     d.path.push(p)
//     console.log("dragging: ", p)
//     return
//   }

//   var point0 = d.path[d.path.length - 1]

//   var moved = false
//   var a = abs(mouseX - point0.x)

//   if (a > d.threshold) {
//     moved = true
//   }

//   var b = abs(mouseY - point0.y)

//   if (b > d.threshold) {
//     moved = true
//   }

//   if (moved) {
//     var p = {
//       x: mouseX,
//       y: mouseY,
//     }
//     d.path.push(p)
//     console.log("dragging new points", p)
//   }
// }
