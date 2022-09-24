const Shape = {
  createTriangle: function ({ s }) {
    var a = s / 2
    return [
      { x: 0, y: -a },
      { x: -a, y: a },
      { x: a, y: a },
    ]
  },

  createSquare: function ({ s }, number) {
    var a = s / number
    var p1 = { x: a, y: -a }
    var p2 = { x: -a, y: -a }
    var p3 = { x: -a, y: a }
    var p4 = { x: a, y: a }

    return [p1, p2, p3, p4]
  },

  createRectangle: function ({ s, r }) {
    var a = s / 2

    var p1 = { x: a, y: r * -a }
    var p2 = { x: -a, y: r * -a }
    var p3 = { x: -a, y: r * a }
    var p4 = { x: a, y: r * a }

    return [p1, p2, p3, p4]
  },

  createPanelItem1: function ({ s, r }, ds, rdx, rdy) {
    var a = s / 2 / ds
    var dx = (rdx * s) / r
    var dy = rdy * s

    var p1 = { x: a + dx, y: -a + dy }
    var p2 = { x: -a + dx, y: -a + dy }
    var p3 = { x: -a + dx, y: a + dy }
    var p4 = { x: a + dx, y: a + dy }

    return [p1, p2, p3, p4]
  },

  createPanelItem2: function ({ s }, r) {
    return []
  },

  createCircle: function ({ s }) {
    return this.createPolygon({ s, edges: 30 })
  },

  createSquare: function ({ s }) {
    return this.createPolygon({ s, edges: 4 })
  },

  createPolygon: function ({ s, edges }) {
    var a = s / 2
    var points = []
    var angles = 360 / edges
    for (var i = 0; i < edges; i++) {
      var x = a * Math.cos(convertDegToRadians(i * angles + 45))
      var y = a * Math.sin(convertDegToRadians(i * angles + 45))
      var p = { x, y }
      points.push(p)
    }

    return points
  },

  createPacman: function ({ s, m }) {
    var a = s / 2
    var p1 = { x: -a, y: -a }
    var p2 = { x: a, y: -a }
    var p3 = { x: a, y: a }
    var p4 = { x: -a, y: a }

    var p5 = {
      x: -a,
      y: 0.3 * s,
    }
    var p6 = {
      x: s * 0.1,
      y: s * 0.3,
    }
    var p7 = {
      x: -s * 0.5,
      y: -s * 0.2 + s * 0.5 * (1 - m),
    }

    return [p1, p2, p3, p4, p5, p6, p7]
  },

  createEnemy: function ({ s, m }) {
    var a = s / 2
    var b = m / 2
    return [
      { x: -a * 0.3, y: a * 0.2 },
      { x: -a * b, y: a * 1 },
      { x: -a * 0.8, y: -a * 0.1 },

      { x: 0, y: -a },

      { x: a * 0.8, y: -a * 0.1 },
      { x: a * b, y: a * 1 },
      { x: a * 0.3, y: a * 0.2 },
    ]
  },

  createTroop: function ({ s }) {
    var a = s / 2
    var p1 = { x: a, y: -a }
    var p2 = { x: -a, y: -a }
    var p3 = { x: -a, y: a }
    var p4 = { x: 1.6 * a, y: a }
    var p5 = { x: 1.6 * a, y: -1.7 * a }
    var p6 = { x: a, y: -1.7 * a }
    var p7 = { x: a, y: a }

    return [p1, p2, p3, p4, p5, p6, p7]
  },

  createBullet: function ({ s }) {
    var a = s / 100
    var p1 = { x: -a / 3, y: -a }
    var p2 = { x: a / 3, y: -a }
    var p3 = { x: a / 3, y: a }
    var p4 = { x: -a / 3, y: a }

    return [p1, p2, p3, p4]
  },

  createBomb: function ({ s }) {
    var a = s / 2
    return [
      { x: 0, y: -a },
      { x: -a, y: a },
      { x: a, y: a },
    ]
  },
}
