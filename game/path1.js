const path1 = {
  calcX: (f) => {
    if (f <= 400) return f
    else if (f <= 600) return 400
    else if (f <= 700) return -f + 1000
    else if (f <= 1050) return 300
    else if (f <= 1250) return f - 750
    else if (f <= 1800) return 500
    else if (f <= 1900) return f - 1300
    else if (f < 2000) return 600
    else if (f <= 2100) return -f + 2600
    else if (f <= 2200) return 500
  },

  calcY: (f) => {
    if (f <= 400) return 300
    else if (f <= 600) return f - 100
    else if (f <= 700) return 500
    else if (f <= 1050) return f - 200
    else if (f <= 1250) return 850
    else if (f <= 1800) return -f + 2100
    else if (f <= 1900) return 300
    else if (f < 2000) return -f + 2100
    else if (f <= 2100) return 200
    else if (f <= 2200) return -f + 2600
  },
}
