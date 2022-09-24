const path3 = {
  calcX: (f) => {
    if (f <= 400) return f
    else if (f <= 600) return 400
    else if (f <= 800) return f - 200
    else if (f <= 1200) return 600
    else if (f <= 1650) return -f + 1800
    else if (f <= 1750) return 150
    else if (f <= 2900) return f - 1600
    else if (f < 3100) return 1300
    else if (f <= 3400) return -f + 4400
    else if (f <= 3550) return 1000
    else if (f <= 3850) return f - 2550
    else if (f <= 3950) return 1300
    else if (f < 4250) return -f + 5250
    else if (f <= 4550) return 1000
  },
  calcY: (f) => {
    if (f <= 400) return 400
    else if (f <= 600) return -f + 800
    else if (f <= 800) return 200
    else if (f <= 1200) return f - 600
    else if (f <= 1650) return 600
    else if (f <= 1750) return f - 1050
    else if (f <= 2900) return 700
    else if (f < 3100) return -f + 3616
    else if (f <= 3400) return 550
    else if (f <= 3550) return -f + 3950
    else if (f <= 3850) return 400
    else if (f <= 3950) return -f + 4250
    else if (f < 4250) return 300
    else if (f <= 4550) return -f + 4550
  },
}
